// FILE: root-controller.ts

import { Context } from 'hono';
import { Controller } from 'paykhom-fw/component/controller';

import { PaykhomApiClientService } from 'paykhom-fw/component/service/paykhom-api-client-service';
import { RedisSession } from 'paykhom-fw/component/session/redis-session';












export class ContentController extends Controller {
   private pg!: PaykhomApiClientService;
   private pageList!: Record<string, any>[]
//   private ss!: RedisSession;

  constructor(config: Record<string, any>={}) {
    super(config);
    // this.ss = this.resolve("session") as RedisSession;
  }
  async $uponReady(): Promise<void> {
    await super.$uponReady();

    //debugger; // bug
    this.pg = this.resolve("pgc");
  }

  async $uponStart(): Promise<void> {
    // this.ss = this.resolve("session");
    //debugger; // bug

    this.pageList = (await this.pg.$fx('/api/v1/core/cms/vw_page/list_all', {})) as unknown as [];

    debugger //bug
    // Dynamically create routes for CMS pages
    this.pageList.forEach((page: Record<string, any>) => {
      this.engine.get(page.slug, this.$onGetPage.bind(this));

      // this.engine.get(page.slug, async (c) => {
      //   return await this.$render(c, import("../view/page"), {page, meta: { title: "Paykhom Platform" } });
      // });
    });


  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  async $onGetPage(c: Context): Promise<Response> {
    //let static cache: Map<string, Record<string, any>> = new Map<string, Record<string, any>>();
    let path = "";
    if (c.req.path.startsWith("/page")) {
      path = c.req.path.substring(5); // Remove the first 5 characters ("/page")
    } else {
      path = c.req.path;
    }
    path = path.substring(1); // strip leading slash (/)


    //if(!cache.has(path)) {
      let result = (await this.pg.$fx('/api/v1/core/cms/vw_page/fetch', {"slug": path}));
      //cache.set(path, out)
    //}
    //let vw_page = cache.get(path)

    return await this.$render(c, import("../view/page"), {vw_page: result.ret_data});
  }






  getRoutes(): [string | string[], string, (c: Context) => Promise<Response>][] {
    
    return [

      // Auth routes
      ["get", "/page/*", this.$onGetPage],


    ];


   }




}