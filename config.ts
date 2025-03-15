// Export an async function to resolve the imports
export default async () => ({
    container: {
        middleware: {
            sessionMiddleware: {
                class: "SessionMiddleware",
                module: import("paykhom-fw/container/middleware/session-middleware"),
                config: {},
            },
            aaaMiddleware: {
                class: "AaaMiddleware",
                module: import("container/middleware/aaa-middleware"),
                config: {},
            }
        },
        plugins: {
            hwp: {
                class: "HelloWorldPlugin",
                module: import("paykhom-fw/container/plugin/hello-world"),
                config: {},
            }
        },
        services: {
            "sessionService": {
                class: "SessionService",
                module: import("paykhom-fw/container/service/session-service"),
                config: {
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
