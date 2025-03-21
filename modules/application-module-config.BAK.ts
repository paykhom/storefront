export const config: Record<string, any>={
    setting: {
        baseRelativePath: process.cwd(),
        appRelativePath: "app",
        controllerRelativePath: "controller",
        viewRelativePath: "view",
    },
    
    container: {
        theme: {
            backOfficeTheme :{   
                class: "BackOfficeTheme",
                module: import("paykhom-fw/app/theme/back-office/back-office-theme"),
                config: {
                    ctor:{}
                },

                container: {
                    controllers: {
                        adminController: {
                            class: "AdminController",
                            module: import("paykhom-fw/app/theme/back-office/controller/admin-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        userController: {
                            class: "UserController",
                            module: import("paykhom-fw/app/theme/back-office/controller/user-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                    },
            
                }

            }
        },

        middleware: {
            sessionMiddleware: {
                class: "SessionMiddleware",
                module: import("paykhom-fw/modules/middleware/session-middleware"),
                config: {
                    ctor:{}
                },
            },
        },
        plugins: {
            hw: {
                class: "HelloWorld",
                module: import("./plugin/hello-world"),
                config: {
                    ctor:{}
                },
            },
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
            "themeManagerService": {
                class: "ThemeManagerService",
                module: import("paykhom-fw/modules/service/theme-manager-service"),
                config: {
                    ctor: {}
                },
    
            },


    
        }
    
    }
};
