// Export an async function to resolve the imports
/*
export default async () => ({
    setting: {
        baseRelativePath: process.cwd(),
        appRelativePath: "app",
        controllerRelativePath: "controller",
        viewRelativePath: "view",
    },
    
    container: {
        middleware: {
            sessionMiddleware: {
                class: "SessionMiddleware",
                module: import("paykhom-fw/modules/middleware/session-middleware"),
                config: {
                    ctor:{}
                },
            },
            aaaMiddleware: {
                class: "AaaMiddleware",
                module: import("modules/middleware/aaa-middleware"),
                config: {
                    ctor:{}
                },
            }
        },
        plugins: {
            hw: {
                class: "HelloWorld",
                module: import("paykhom-fw/modules/plugin/hello-world"),
                config: {
                    ctor:{}
                },
            },
            // cms: {
            //     class: "Cms",
            //     module: import("paykhom-fw/modules/plugin/cms"),
            //     config: {
            //         ctor:{}
            //     },
            // }
        },
        services: {
            "sessionService": {
                class: "SessionService",
                module: import("paykhom-fw/modules/service/session-service"),
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
                module: import("paykhom-fw/modules/service/postgresql-client-service"),
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
*/

// TODO: copied to test if we can make config look simpler. testing pending. key issue is import(...)
export const config: Record<string, any>={
    settings: {
        baseRelativePath: process.cwd(),
        appRelativePath: "app",
        controllerRelativePath: "controller",
        viewRelativePath: "view",
        activeTheme: "storefrontTheme"
    },
    
    container: {
        theme: {
            storefrontTheme: {
                class: "StorefrontTheme",
                module: import("app/theme/storefront/storefront-theme"),
                config: {
                    ctor:{}
                },
                container: {
                    controllers: {
                        storefrontController: {
                            class: "StorefrontController",
                            module: import("app/theme/storefront/controller/storefront-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                    },
    
                }
            },
        },
        middlewares: {
            // sessionMiddleware: {
            //     class: "SessionMiddleware",
            //     module: import("paykhom-fw/modules/middleware/session-middleware"),
            //     config: {
            //         ctor:{}
            //     },
            // },
            aaaMiddleware: {
                class: "AaaMiddleware",
                module: import("modules/middleware/aaa-middleware"),
                config: {
                    ctor:{}
                },
            }
        },
        plugins: {
            // hw: {
            //     class: "HelloWorld",
            //     module: import("paykhom-fw/modules/plugin/hello-world"),
            //     config: {
            //         ctor:{}
            //     },
            // },
            // cms: {
            //     class: "Cms",
            //     module: import("paykhom-fw/modules/plugin/cms"),
            //     config: {
            //         ctor:{}
            //     },
            // }
        },
        services: {
            // "sessionService": {
            //     class: "SessionService",
            //     module: import("paykhom-fw/modules/service/session-service"),
            //     config: {
            //         ctor: {},
            //         redisUrl: 'redis://localhost:6379',
            //         sessionPrefix: '.paykhom.com:session:',
            //         defaultTTL: 3600 * 24 * 30 * 12, // 1h * 24 * 30 * 12
            //         cookieName: 'session_id',
            //         cookieOptions: {
            //             domain: ".paykhom.com",
            //             httpOnly: true,
            //             secure: false, //Bun.env.NODE_ENV === 'production',
            //             sameSite: 'Lax',
            //         },
            //     },
    
            // },
            "pgc": {
                class: "PostgresqlClientService",
                module: import("paykhom-fw/modules/service/postgresql-client-service"),
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
};
