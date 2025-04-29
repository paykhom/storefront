export default {
    config: {
        baseRelativePath: process.cwd(),
        appRelativePath: "app",
        controllerRelativePath: "controller",
        viewRelativePath: "view",
        activeTheme: "storefrontTheme",

        //
        apiHost: "https://api.paykhom.com",
        //
        //subdomain: "mondi",
        //apiToken: "abcdefgh",
        bearerToken: "prottoy.bd/abracadabra"
    },
    
    container: {
        theme: {
            storefrontTheme: {
                class: "StorefrontTheme",
                module: import("app/theme/storefront-theme"),
                config: {
                    ctor:{}
                },
                container: {
                    controllers: {
                        storefrontController: {
                            class: "StorefrontController",
                            module: import("./app/theme/storefront-theme/controller/storefront-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        aaaController: {
                            class: "AaaController",
                            module: import("./app/theme/storefront-theme/controller/aaa-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                        contentController: {
                            class: "ContentController",
                            module: import("./app/theme/storefront-theme/controller/content-controller"),
                            config: {
                                ctor:{}
                            }
                        },
                    },
    
                }
            },
        },
        plugins: {
            // hw: {
            //     class: "HelloWorld",
            //     module: import("paykhom-fw/component/plugin/hello-world"),
            //     config: {
            //         ctor:{}
            //     },
            // },
            // cms: {
            //     class: "Cms",
            //     module: import("paykhom-fw/component/plugin/cms"),
            //     config: {
            //         ctor:{}
            //     },
            // }
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
            "pgc": {
                class: "PaykhomApiClientService",
                module: import("paykhom-fw/component/service/paykhom-api-client-service"),
                config: { 
                },
           },    
        }
    
    }
};
