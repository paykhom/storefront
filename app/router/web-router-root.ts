// FILE: web-router-bundle.ts

import { Context, Hono } from "hono";
import { RootController } from "../controller/root-controller";
//import { RootController } from "../controller/rooot-controller";

import { Glass } from "paykhom-fw/glass";

import { PostgresqlClientService } from 'paykhom-fw/service/postgresql-client-service';
import { SessionService, UserSession } from 'paykhom-fw/service/session-service';
import { ApplicationServer } from "../../server";

export class WebRouterRoot extends Glass {
  private app: ApplicationServer;
  private rootController: RootController;
  //private platformController: PlatformController;

  private pgc: PostgresqlClientService;
  private sessionService: SessionService<UserSession>;

  constructor(config: Record<string, any>, deps: Record<string, any> = {}) {
    super(config);
    this.app = deps.app as ApplicationServer;
    this.rootController = deps.rootController as RootController;
    this.pgc = deps.pgc as PostgresqlClientService;
    this.sessionService = deps.sessionService as SessionService<UserSession>; 
  }

  private getUserModuleFromReferer(c: Context): string {
    const referer = c.req.header('referer');
    if (referer && /^https?:\/\//.test(referer)) { // Simple URL check
        const urlParts = new URL(referer);
        const path = urlParts.pathname || '';
        const segments = path.split('/').filter(Boolean);
        return segments[0] || '';
    }
    return '';
  }

  private async saveImage(namespace: string, className: string, type: string, id: string, filename: string, content: string): Promise<void> {
      const path = `${namespace}/${className}/${type}/${id}/${filename}`;
      await Bun.write(`./storage/${path}`, Buffer.from(content, 'base64')); // Assuming content is base64-encoded
  }

  public setupRoutes() {
    // Root route
    this.app.get("/", async (c) => await this.rootController.onGetIndex(c));

    // Auth routes
    this.app.get("/signup", async (c) => await this.rootController.onGetSignup(c));
    this.app.post("/signup", async (c) => await this.rootController.onPostSignup(c));
    this.app.get("/login", async (c) => await this.rootController.onGetLogin(c));
    this.app.post("/login", async (c) => await this.rootController.onPostLogin(c));
    this.app.get("/logout", async (c) => await this.rootController.onGetLogout(c));
    this.app.post("/logout", async (c) => await this.rootController.onPostLogout(c));
    this.app.get("/forgot-password", async (c) => await this.rootController.onGetForgotPassword(c));
    this.app.post("/forgot-password", async (c) => await this.rootController.onPostForgotPassword(c));
    this.app.get("/reset-password", async (c) => await this.rootController.onGetResetPassword(c));
    this.app.post("/reset-password", async (c) => await this.rootController.onPostResetPassword(c));

    



    // POST /dbx/{namespace}/{class}/{method}
    this.app.post('/dbx/:namespace/:class/:method', async (c) => {
      const { namespace, class: className, method } = c.req.param();
      const payload = await c.req.json();
      payload.user_module = this.getUserModuleFromReferer(c);

      const fn = `${namespace}.${className}__${method}`;
      let result: any;

      if (method === 'upsert') {
          if (payload.logo_image) {
              const pathInfo = payload.logo_image.split('/').pop() || '';
              const extension = pathInfo.includes('.') ? `.${pathInfo.split('.').pop()}` : '';
              payload.logo_image = `logo_image${extension}`;
          }
          if (payload.banner_image) {
              const pathInfo = payload.banner_image.split('/').pop() || '';
              const extension = pathInfo.includes('.') ? `.${pathInfo.split('.').pop()}` : '';
              payload.banner_image = `banner_image${extension}`;
          }

          result = await this.pgc.fx(fn, payload); // Assuming fn is a method on PostgresqlClientService

          if (!result.is_error) {
              if (payload.logo_image && payload.logo_image_content) {
                  await this.saveImage(namespace, className, 'logo_image', result[payload.__internal.primary_key], payload.logo_image, payload.logo_image_content);
              }
              if (payload.banner_image && payload.banner_image_content) {
                  await this.saveImage(namespace, className, 'banner_image', result[payload.__internal.primary_key], payload.banner_image, payload.banner_image_content);
              }
          } else {
              return c.text(`Internal Server Error: ${result.__db_error__.error}`, 500);
          }
      } else {
          result = await this.pgc.fx(fn, payload);
      }

      return c.json(result);
    });

    // POST /dbxzc/{namespace}/{class}/{method}
    this.app.post('/dbxzc/:namespace/:class/:method', async (c) => {
      const { namespace, class: className, method } = c.req.param();
      const payload = await c.req.json();

      const fn = `${namespace}.${className}__${method}`;
      let result: any;

      if (method === 'upsert') {
          if (payload.logo_image) {
              const pathInfo = payload.logo_image.split('/').pop() || '';
              const extension = pathInfo.includes('.') ? `.${pathInfo.split('.').pop()}` : '';
              payload.logo_image = `logo_image${extension}`;
          }
          if (payload.banner_image) {
              const pathInfo = payload.banner_image.split('/').pop() || '';
              const extension = pathInfo.includes('.') ? `.${pathInfo.split('.').pop()}` : '';
              payload.banner_image = `banner_image${extension}`;
          }

          result = await this.pgc.fx(fn, payload);

          if (!result.is_error) {
              if (payload.logo_image && payload.logo_image_content) {
                  await this.saveImage(namespace, className, 'logo_image', result[payload.__internal.primary_key], payload.logo_image, payload.logo_image_content);
              }
              if (payload.banner_image && payload.banner_image_content) {
                  await this.saveImage(namespace, className, 'banner_image', result[payload.__internal.primary_key], payload.banner_image, payload.banner_image_content);
              }
          } else {
              return c.text(`Internal Server Error: ${result.__db_error__.error}`, 500);
          }
      } else {
          result = await this.pgc.fx(fn, payload);
      }

      return c.json(result);
    });

    // GET /dtx/{namespace}/{class}/{method}
    this.app.get('/dtx/:namespace/:class/:method', async (c) => {
      const { namespace, class: className, method } = c.req.param();
      const query = c.req.query();
  
      const qpSpec = {
          draw: 1,
          start: 0,
          length: 10,
          'search[value]': '',
          'search[regex]': false,
          '_': 1736362228591
      };
      const allParams = { ...qpSpec, ...query }; // Merge defaults with actual query params
  
      const userModule = this.getUserModuleFromReferer(c);
      const fn = `${namespace}.${className}__${method}`;
  
      // Define input with index signature for dynamic keys
      const input: {
          offset: number;
          limit: number;
          do_count: boolean;
          user_module: string;
          [key: string]: any; // Allows dynamic properties like input[className]
      } = {
          offset: parseInt(String(allParams.start)),
          limit: parseInt(String(allParams.length)),
          do_count: true,
          user_module: userModule,
      };
  
      if (allParams['search[value]']) {
          input[className] = { search: `%${allParams['search[value]']}%` }; // Now TypeScript is happy
      }
  
      const out = await this.pgc.fx(fn, input);
  
      const result = {
          draw: parseInt(String(allParams.draw)),
          recordsTotal: parseInt(out.row_count || 0),
          recordsFiltered: parseInt(out.row_count || 0),
          data: out.ret_data || [],
          start: parseInt(String(allParams.start)),
          length: parseInt(String(allParams.length)),
      };
  
      return c.json(result);
  });

  }
}