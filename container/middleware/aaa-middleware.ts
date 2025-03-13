import { Context, Next } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';
import { Middleware } from 'paykhom-fw/container/middleware';

interface UserRole {
    role_id: number;
    role_slug: string;
}

export class AaaMiddleware extends Middleware {
    private ss!: SessionService<UserSession>;
    private protectedPrefixes: string[] = [
        'admin', 'customer', 'vendor', 'drone', 'courier',
        'carrier', 'dropshipper', 'user', 'dealer', 'distributor',
        'manufacturer', 'merchant', 'supplier', 'wholesaler',
        'retailer', 'reseller', 'agent', 'broker', 'affiliate',
        'partner', 'franchisee', 'franchisor', 'saas',
        'dbx', 'dbxzc', 'dtx'
    ];
    private loginURL: string;

    constructor(config: Record<string, any>) {
        super(config);
        //this.ss = deps.sessionService as SessionService<UserSession>;
        this.protectedPrefixes = config.protectedPrefixes ?? this.protectedPrefixes;
        this.loginURL = config.loginURL ?? '/login';
    }

    async uponReady(): Promise<void> {
        this.ss = this.resolve("sessionService");
    }

    public async handle(c: Context, next: Next) {
        if (this.isStaticFileRequest(c)) {
            return await next();
        }

        try {
            const hasSession = c.get('hasSession') as boolean;

            // if (!hasSession) {
            //   return await next();
            // }

            //const session = c.get('session') as SessionService<UserSession>;

            // if (!session) {
            //   return await next();
            // }

            const sessionData: UserSession = (await this.ss.getSession(c)) || {
                // isAuthenticated: false,
                // isGuest: true,
                // user: { user_role: [{ role_id: 0, role_slug: "none" }] }
            };

            const path = c.req.path;
            const isProtected = this.isProtectedRoute(path);
            const roles = sessionData.user?.user_role ?? [];

            const isSaasAdmin = this.hasRole(roles, 'saas');
            if (isSaasAdmin !== sessionData.is_saas_admin) {
                await this.ss.updateSession(c, {'is_saas_admin': isSaasAdmin});
            }

            if (!isProtected) {
                return await next();
            }

            if (!sessionData.isAuthenticated) {
                const encodedTargetUrl = encodeURIComponent(path);
                return c.redirect(`${this.loginURL}?target-url=${encodedTargetUrl}`);
            }

            if (path.startsWith('/saas')) {
                if (!this.hasRole(roles, 'saas')) {
                    return c.html(
                        "Forbidden. You have no appropriate access. Please consult the Site Administrator.",
                        403
                    );
                }
            }
            await next();
        } catch (error) {
            console.error("AAA Middleware Error", error);
            return c.html(
                `Internal Error: ${error}. Please consult the Site Administrator.`,
                500
            );
        }
    }

    public checkRole(...roles: string[]) {
        return async (c: Context, next: Next) => {
            //const session = c.get('session') as SessionService<UserSession>;
            const sessionData: UserSession = (await this.ss.getSession(c)) || {
                isAuthenticated: false,
                isGuest: true,
                user: { user_role: [{ role_id: 0, role_slug: "none" }] }
            };

            if (!sessionData || !this.hasAnyRole(sessionData?.user?.user_role, roles)) {
                throw new HTTPException(403, { message: 'Unauthorized access' });
            }
            await next();
        };
    }

    public checkPermission(permission: string) {
        return async (c: Context, next: Next) => {
            const hasPermission = await this.checkUserPermission(c, permission);
            if (!hasPermission) {
                throw new HTTPException(403, { message: 'Unauthorized access' });
            }
            await next();
        };
    }

    public authenticateWithSession() {
        return async (c: Context, next: Next) => {
            const path = c.req.path;
            if (this.isProtectedRoute(path)) {
                const sessionData = await this.ss.getSession(c);
                if (sessionData) {
                    c.set('auth', sessionData); // Optional: keep if controllers need it
                }
            }
            await next();
        };
    }

    public authenticateApiWithToken() {
        return async (c: Context, next: Next) => {
            const path = c.req.path;
            if (this.isProtectedRoute(path)) {
                const token = c.req.header('Authorization')?.replace('Bearer ', '');
                if (!token) {
                    return c.json({ error: 'Unauthorized - No token provided.' }, 401);
                }

                const userData = await this.getUserByToken(token);
                if (!userData) {
                    return c.json({ error: 'Unauthorized - Invalid token provided' }, 401);
                }

                c.set('auth', userData);
            }
            await next();
        };
    }

    private isProtectedRoute(path: string): boolean {
        return this.protectedPrefixes.some(prefix =>
            path.startsWith(`/${prefix}`)
        );
    }

    private hasRole(roles: UserRole[], roleSlug: string): boolean {
        return roles.some(role => role.role_slug === roleSlug);
    }

    private hasAnyRole(roles: UserRole[], checkRoles: string[]): boolean {
        return roles.some(role => checkRoles.includes(role.role_slug));
    }

    private async getSessionData(sessionId: string): Promise<any> {
        return null;
    }

    private async getUserByToken(token: string): Promise<any> {
        return null;
    }

    private async checkUserPermission(c: Context, permission: string): Promise<boolean> {
        return false;
    }
}