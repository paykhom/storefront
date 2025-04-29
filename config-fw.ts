export default {
    config: {
        baseRelativePath: process.cwd(),
        appRelativePath: "app",
        controllerRelativePath: "controller",
        viewRelativePath: "view",
    },
    
    container: {
        infrastructure: {
            "session" : {
                class: "RedisSession",
                module: import("paykhom-fw/component/session/redis-session"),
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

            }
        },
        services: {
            // "session": {
            //     class: "RedisSession",
            //     module: import("paykhom-fw/component/session/redis-session"),
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



            // "themeManagerService": {
            //     class: "ThemeManagerService",
            //     module: import("paykhom-fw/component/service/theme-manager-service"),
            //     config: {
            //         ctor: {}
            //     },
    
            // },


    
        },
    
        middleware: {
            sessionMiddleware: {
                class: "SessionMiddleware",
                module: import("paykhom-fw/component/middleware/session-middleware"),
                config: {
                    ctor:{}
                },
            },
            aaaMiddleWare: {
                class: "AaaMiddleware",
                module: import("paykhom-fw/component/middleware/aaa-middleware"),
                config: {
                    protectedPrefixes: [
                        'admin', 'customer', 'vendor', 'drone', 'courier',
                        'carrier', 'dropshipper', 'user', 'dealer', 'distributor',
                        'manufacturer', 'merchant', 'supplier', 'wholesaler',
                        'retailer', 'reseller', 'agent', 'broker', 'affiliate',
                        'partner', 'franchisee', 'franchisor', 'saas',
                        'dbx', 'dbxzc', 'dtx'
                    ],
                    loginUrl: "/login",
                    ctor:{}
                },

            }            
        },

        // theme: {
        // },

        plugins: {
            siteManager :{   
                class: "SiteManager",
                module: import("paykhom-fw/app/site-manager"),
                config: {
                    ctor:{}
                },

                container: {
                    controllers: {
                        apiController: {
                            class: "ApiController",
                            module: import("paykhom-fw/app/site-manager/controller/api-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        adminController: {
                            class: "AdminController",
                            module: import("paykhom-fw/app/site-manager/controller/admin-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        userController: {
                            class: "UserController",
                            module: import("paykhom-fw/app/site-manager/controller/user-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        cmsController: {
                            class: "CmsController",
                            module: import("paykhom-fw/app/site-manager/controller/cms-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        ecommerceController: {
                            class: "EcommerceController",
                            module: import("paykhom-fw/app/site-manager/controller/ecommerce-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                    },
            
                }

            }
        },
    }
};
