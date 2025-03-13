export default {
    middleware: {
        aaaMiddleware: {
            class: "container/middleware/aaa-middleware",
            config: {},
            deps: ["sessionService"]
        }
    },
    plugins: {
        helloWorldPlugin: {
            class: "paykhom-fw/core/ext/plugin/hello-world",
            config: {},
            deps: []
        }
    },
    controllers: {
        platformController: {
            class: "app/controller/platform-controller",
            config: {},
            deps: ["pgc", "sessionService"]
        },
        bundleController: {
            class: "app/controller/bundle-controller",
            config: {},
            deps: ["pgc", "sessionService"]
        }
    },
    services: {
        "sessionService": {
            class: "",
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
            deps: []

        },
        "pgc": {
            class: "",
            config: {

            },
            deps: []

        },

    }
};
