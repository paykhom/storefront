// Export an async function to resolve the imports
export default async () => ({
    container: {
        routers: {
            webRouter: {
                class: "WebRouter",
                module: import("app/router/web-router"),
                config: {
                    ctor:{}
                },
            },

        },
        middleware: {
            sessionMiddleware: {
                class: "SessionMiddleware",
                module: import("paykhom-fw/container/middleware/session-middleware"),
                config: {
                    ctor:{}
                },
            },
            aaaMiddleware: {
                class: "AaaMiddleware",
                module: import("container/middleware/aaa-middleware"),
                config: {
                    ctor:{}
                },
            }
        },
        plugins: {
            hwp: {
                class: "HelloWorld",
                module: import("paykhom-fw/container/plugin/hello-world"),
                config: {
                    ctor:{}
                },
            }
        },
        services: {
            "sessionService": {
                class: "SessionService",
                module: import("paykhom-fw/container/service/session-service"),
                config: {
                    ctor: {},
                    redisUrl: 'redis://localhost:6379',
                    sessionPrefix: '.paykhom.com:session:',
                    defaultTTL: 3600 * 24 * 30 * 12, // 1h * 24 * 30 * 12
                    cookieName: 'session_id',
                    cookieOptions: {
                        domain: ".paykhom.com",
                        httpOnly: true,
                        secure: false, //Bun.env.NODE_ENV === 'production',
                        sameSite: 'Lax',
                    },
                },
    
            },
            "pgc": {
                class: "PostgresqlClientService",
                module: import("paykhom-fw/container/service/postgresql-client-service"),
                config: { 
                    ctor: {},
                    user: "postgres", 
                    host: "localhost", 
                    database: "paykhom", 
                    password: "adminxp123.com", 
                    port: 5432 }
                ,
    
            },
    
        }
    
    }
});
