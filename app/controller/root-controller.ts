// FILE: root-controller.ts

import { Context } from 'hono';
import { BaseController as Controller } from "./base-controller";
import { PostgresqlClientService } from 'paykhom-fw/container/service/postgresql-client-service';
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';

export class RootController extends Controller {
  private pg!: PostgresqlClientService;
  private ss!: SessionService<UserSession>;

  constructor(args: Record<string, any>={}) {
    super(args);
    //this.pg = deps.pgc as PostgresqlClientService;
    //this.ss = deps.sessionService as SessionService<UserSession>;
  }

  async uponReady(): Promise<void> {
    this.pg = this.resolve("pgc");
    this.ss = this.resolve("sessionService");
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* HOwCOME THESE ARE ALREADY DUPLICATE ==>> LOOKS INCOMPLETE
  async onGetSignup(c: Context): Promise<Response> {
    return await this.render(c, "platform/signup", { meta: { title: "Paykhom Signup" } });
  }

  async onPostSignup(c: Context): Promise<Response> {
    const payload = await c.req.json();
    const result = await this.pg.fx("saas.user__signup", payload);
    // Optionally set session data if signup auto-logs in (not in original behavior)
    return c.json(result);
  }

  async onGetLogin(c: Context): Promise<Response> {
    return await this.render(c, "login", { meta: { title: "Paykhom Login" } });
  }

  async onPostLogin(c: Context): Promise<Response> {
    const payload = await c.req.json();
    const input = {
      email: payload.email,
      password: payload.password,
    };

    const result = await this.pg.fx("saas.user__login", input);
    const isSuccessful = result?.ret_val > 0;

    if (isSuccessful) {
      await this.ss.put(c, "isGuest", false);
      await this.ss.put(c, "isAuthenticated", true);
      await this.ss.put(c, "user", result.ret_data);
      await this.ss.put(c, "lastLogin", new Date());
    } else {
      await this.ss.put(c, "isGuest", true);
      await this.ss.put(c, "isAuthenticated", false);
      await this.ss.put(c, "user", {});
      await this.ss.put(c, "lastLogin", new Date());
    }

    return c.json(result);
  }

  async onGetLogout(c: Context): Promise<Response> {
    await this.ss.destroySession(c);
    return await this.render(c, "platform/logout", { meta: { title: "Paykhom Logout" } });
  }

  async onPostLogout(c: Context): Promise<Response> {
    await this.ss.put(c, "isGuest", true);
    await this.ss.put(c, "isAuthenticated", false);
    await this.ss.put(c, "user", { user_role: [] });
    return c.json({ message: "Success" });
  }

  async onGetForgotPassword(c: Context): Promise<Response> {
    return await this.render(c, "platform/forgot-password", { meta: { title: "Paykhom Forgot Password" } });
  }

  async onPostForgotPassword(c: Context): Promise<Response> {
    const payload = await c.req.json();
    const result = await this.pg.fx("saas.user__forgot_password_f1", payload);
    return c.json(result);
  }

  async onGetResetPassword(c: Context): Promise<Response> {
    return await this.render(c, "platform/reset-password", { meta: { title: "Paykhom Reset Password" } });
  }

  async onPostResetPassword(c: Context): Promise<Response> {
    const payload = await c.req.json();
    const result = await this.pg.fx("saas.user__reset_password", payload);
    return c.json(result);
  }

  */

  
  async onGetIndex(c: Context): Promise<Response> {
    return await this.render(c, "index", { meta: { title: "Paykhom Platform" } });
  }
  
  
  // async onGetIndex(c: Context): Promise<Response> {
  //   return await this.render(c, "index", { meta: { title: "Paykhom Platform" } });
  // }



  async onGetSignup(c: Context): Promise<Response> {
    return await this.render(c, "signup", { meta: { title: "Paykhom Platform" } });
  }






  async onGetLogin(c: Context): Promise<Response> {
    return await this.render(c, "login", { meta: { title: "Paykhom Platform" } });
  }

  async onGetForgotPassword(c: Context): Promise<Response> {
    return await this.render(c, "forgot-password", { meta: { title: "Paykhom Platform" } });
  }

  async onPostLogin(c: Context): Promise<Response> {
    const payload = await c.req.json();
    const input = {
      email: payload.email,
      password: payload.password,
    };

    try {
      const result = await this.pg.fx('saas.user__login', input); // Updated to use injected pg service
      const isSuccessful = result?.ret_val > 0;

      if (isSuccessful) {
        // await this.ss.put(c, 'isAuthenticated', true);
        // await this.ss.put(c, 'user', result.ret_data);
        // await this.ss.put(c, 'isGuest', false);
        await this.ss.updateSession(c, {
          isAuthenticated: true,
          user: result.ret_data,
          isGuest: false

        })
      } else {
        // await this.ss.put(c, 'isAuthenticated', false);
        // await this.ss.put(c, 'user', []);
        await this.ss.updateSession(c, {
          isAuthenticated: false,
          user: {} // i think {} is appropriate, rather than []
        })
      }

      return c.json(result);
    } catch (error) {
      return c.json({ error: 'Login failed' }, 500);
    }
  }

  async onPostSignup(c: Context): Promise<Response> {
    const payload = await c.req.json();

    try {
      const result = await this.pg.fx('saas.user__signup', payload); // Updated to use injected pg service
      const isSuccessful = result?.ret_val > 0;

      if (isSuccessful) {
        // await this.ss.put(c, 'isAuthenticated', true);
        // await this.ss.put(c, 'user', result.ret_data);
        // await this.ss.put(c, 'isGuest', false);
        await this.ss.updateSession(c, {
          isAuthenticated: true,
          user: result.ret_data,
          isGuest: false
        })

      }

      return c.json(result);
    } catch (error) {
      return c.json({ error: 'Signup failed' }, 500);
    }
  }

  async onPostForgotPassword(c: Context): Promise<Response> {
    const payload = await c.req.json();

    try {
      const result = await this.pg.fx('saas.user__forgot_password_f1', payload); // Updated to use injected pg service
      return c.json(result);
    } catch (error) {
      return c.json({ error: 'Forgot password failed' }, 500);
    }
  }

  async onGetLogout(c: Context): Promise<Response> {
    //await this.ss.destroySession(c); // Clear entire session
    this.ss.updateSession(c, {isAuthenticated: false, isGuest: true, user: {}})
    return c.redirect('/');
  }

  async onPostLogout(c: Context): Promise<Response> {
    //await this.ss.destroySession(c); // Clear entire session
    this.ss.updateSession(c, {isAuthenticated: false, isGuest: true, user: {}})
    return c.json({ message: 'Success' }, 200);
  }

  async onGetResetPassword(c: Context): Promise<Response> {
    return await this.render(c, "reset-password", { meta: { title: "Paykhom Platform" } });
  }

  async onPostResetPassword(c: Context): Promise<Response> {
    const payload = await c.req.json();

    try {
      const result = await this.pg.fx('saas.user__reset_password', payload); // Updated to use injected pg service
      return c.json(result);
    } catch (error) {
      return c.json({ error: 'Reset password failed' }, 500);
    }
  }

  async onGetHandleForgotPassword(c: Context): Promise<Response> {
    return c.json({ message: 'Not implemented' });
  }

  async onPostHandleForgotPassword(c: Context): Promise<Response> {
    return c.json({ message: 'Not implemented' });
  }












  
  async onGetInfoCompany(c: Context): Promise<Response> {
    return await this.render(c, 'info/company', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoCareer(c: Context): Promise<Response> {
    return await this.render(c, 'info/career', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoAbout(c: Context): Promise<Response> {
    return await this.render(c, 'info/about', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoHelp(c: Context): Promise<Response> {
    return await this.render(c, 'info/help', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoValue(c: Context): Promise<Response> {
    return await this.render(c, 'info/value', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoPayment(c: Context): Promise<Response> {
    return await this.render(c, 'info/payment', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoShipping(c: Context): Promise<Response> {
    return await this.render(c, 'info/shipping', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoReturn(c: Context): Promise<Response> {
    return await this.render(c, 'info/returns', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoFaq(c: Context): Promise<Response> {
    return await this.render(c, 'info/faq', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoCheckout(c: Context): Promise<Response> {
    return await this.render(c, 'info/checkout', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoOpportunity(c: Context): Promise<Response> {
    return await this.render(c, 'info/opportunity', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoEntrepreneur(c: Context): Promise<Response> {
    return await this.render(c, 'info/entrepreneur', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoEarning(c: Context): Promise<Response> {
    return await this.render(c, 'info/earning', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoIdea(c: Context): Promise<Response> {
    return await this.render(c, 'info/idea', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoRetailer(c: Context): Promise<Response> {
    return await this.render(c, 'info/retailer', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoGiftCard(c: Context): Promise<Response> {
    return await this.render(c, 'info/gift-card', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoPromo(c: Context): Promise<Response> {
    return await this.render(c, 'info/promo', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoAd(c: Context): Promise<Response> {
    return await this.render(c, 'info/ad', { meta: { title: 'Dashboard' } });
  }

  async onGetInfoContact(c: Context): Promise<Response> {
    return await this.render(c, 'info/contact', { meta: { title: 'Dashboard' } });
  }







  /* RELOCATE SOMEWHERE ELSE!




  async onGetCustomerDashboard(c: Context): Promise<Response> {
    return await this.render(c, "customer/dashboard", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAdminDashboard(c: Context): Promise<Response> {
    return await this.render(c, "admin/dashboard", { meta: { title: "Paykhom Platform" } });
  }

  async onPostGetUserData(c: Context): Promise<Response> {
    const user = (await this.ss.get(c, 'user')) || null;
    return c.json({ user }, 200);
  }


  generateSmartPagination(prefix: string, currentPage: number, totalPages: number, maxVisibleButtons = 10, options: any = {}) {
    const defaultOptions = {
      query_param: 'page',
      alignment: 'center',
      classes: {
        pagination: 'pagination',
        item: 'page-item',
        link: 'page-link',
        active: 'active',
        disabled: 'disabled',
        ellipsis: 'disabled',
      },
    };
    const mergedOptions = { ...defaultOptions, ...options };
    const classes = mergedOptions.classes;
    const alignmentClass = mergedOptions.alignment === 'left' ? 'justify-content-start' : mergedOptions.alignment === 'right' ? 'justify-content-end' : 'justify-content-center';

    if (totalPages <= 1) {
      return `<nav><ul class="${classes.pagination} ${alignmentClass}"><li class="${classes.item} ${classes.active}"><span class="${classes.link}">1</span></li></ul></nav>`;
    }

    currentPage = Math.max(1, Math.min(totalPages, currentPage));
    let html = `<nav><ul class="${classes.pagination} ${alignmentClass}">`;

    html += currentPage > 1
      ? `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/${currentPage - 1}" aria-label="Previous">«</a></li>`
      : `<li class="${classes.item} ${classes.disabled}"><span class="${classes.link}" aria-disabled="true">«</span></li>`;

    if (currentPage > maxVisibleButtons - 1) {
      html += `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/1">1</a></li>`;
      if (currentPage > maxVisibleButtons) {
        html += `<li class="${classes.item} ${classes.ellipsis}"><span class="${classes.link}">...</span></li>`;
      }
    }

    const start = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const end = Math.min(totalPages, currentPage + Math.floor(maxVisibleButtons / 2));

    for (let i = start; i <= end; i++) {
      const active = i === currentPage ? ` ${classes.active}` : '';
      const ariaCurrent = i === currentPage ? ' aria-current="page"' : '';
      html += `<li class="${classes.item}${active}"><a class="${classes.link}" href="${prefix}/page/${i}"${ariaCurrent}>${i}</a></li>`;
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        html += `<li class="${classes.item} ${classes.ellipsis}"><span class="${classes.link}">...</span></li>`;
      }
      html += `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/${totalPages}">${totalPages}</a></li>`;
    }

    html += currentPage < totalPages
      ? `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/${currentPage + 1}" aria-label="Next">»</a></li>`
      : `<li class="${classes.item} ${classes.disabled}"><span class="${classes.link}" aria-disabled="true">»</span></li>`;

    html += '</ul></nav>';
    return html;
  }


  */
}