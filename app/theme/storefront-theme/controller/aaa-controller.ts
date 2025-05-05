// FILE: root-controller.ts

import { Context } from 'hono';
import { AaaBaseController } from 'paykhom-fw/component/plugin/site-manager/controller/aaa-base-controller';
// import { PostgresqlClientService } from '../component/service/postgresql-client-service';
// import { RedisSession, UserSession } from '../component/session/redis-session';

import { PaykhomApiClientService } from 'paykhom-fw/component/service/paykhom-api-client-service';
import { RedisSession } from 'paykhom-fw/component/session/redis-session';












export class AaaController extends AaaBaseController {
//   private pg!: PostgresqlClientService;
//   private ss!: RedisSession;

  constructor(config: Record<string, any>={}) {
    super(config);
    // this.pg = this.resolve("pgc") as PostgresqlClientService;
    // this.ss = this.resolve("session") as RedisSession;
  }
  async $uponReady(): Promise<void> {
    await super.$uponReady();
    // this.pg = this.resolve("pgc");
    // this.ss = this.resolve("session");
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  override async $onGetSignup(c: Context): Promise<Response> {
    await super.$onGetSignup(c)
    return await this.$render(c, import("../view/signup"), { meta: { title: "Paykhom Platform" } });
  }





  override async $onGetLogin(c: Context): Promise<Response> {
    await super.$onGetLogin(c)
    return await this.$render(c, import("../view/login"), { meta: { title: "Paykhom Platform" } });
  }

  override async $onGetForgotPassword(c: Context): Promise<Response> {
    await super.$onGetForgotPassword(c)
    return await this.$render(c, import("../view/forgot-password"), { meta: { title: "Paykhom Platform" } });
  }


  override async $onGetLogout(c: Context): Promise<Response> {
    await super.$onGetLogout(c)
    return c.redirect('/');
  }


  override async $onGetResetPassword(c: Context): Promise<Response> {
    await super.$onGetResetPassword(c)
    return await this.$render(c, import("../view/reset-password"), { meta: { title: "Paykhom Platform" } });
  }

  override async $onGetHandleForgotPassword(c: Context): Promise<Response> {
    await super.$onGetHandleForgotPassword(c)
    return c.json({ message: 'Not implemented' });
  }













  getRoutes(): [string | string[], string, (c: Context) => Promise<Response>][] {
    return [

      // Auth routes
      ["get", "/signup", this.$onGetSignup],
      ["post", "/signup", this.$onPostSignup],
      ["get", "/login", this.$onGetLogin],
      ["post", "/login", this.$onPostLogin],
      ["get", "/logout", this.$onGetLogout],
      ["post", "/logout", this.$onPostLogout],
      ["get", "/forgot-password", this.$onGetForgotPassword],
      ["post", "/forgot-password", this.$onPostForgotPassword],
      ["get", "/reset-password", this.$onGetResetPassword],
      ["post", "/reset-password", this.$onPostResetPassword],


    ]
   }




}