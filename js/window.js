window.__NUXT__ = {};
window.__NUXT__.config = {
    public:
    {
        UPLOADER_URL: "https://s3.blum.codes",
        COMMIT_HASH: "",
        CF_TURNSTILE_SITE_KEY: "0x4AAAAAAAb84SLWNawu7f1z",
        SENTRY_DSN: "https://266823c494b29b8d9a778ca2d9d1215a@sentry.blum.codes/3",
        TELEGRAM_APP_URL: "https://t.me/blum/app",
        ENVIRONMENT: "prod",
        POSTHOG_API_KEY: "phc_BRc1h2D59fSOcdqTMCEzfNiMgEL5jTG630JBQWC5CnH",
        POSTHOG_HOST: "https://eu.i.posthog.com",
        TG_ANALYTICS_NAME: "blum_data_prod",
        TG_ANALYTICS_TOKEN: "eyJhcHBfbmFtZSI6ImJsdW1fZGF0YV9wcm9kIiwiYXBwX3VybCI6Imh0dHBzLy90Lm1lL0JsdW1DcnlwdG9Cb3QiLCJhcHBfZG9tYWluIjoiaHR0cHM6Ly90ZWxlZ3JhbS5ibHVtLmNvZGVzIn0=!MU0kXOzDDD/uWjqbs8GvSYHRixCiwotuxO5NY6ct/NI=",
        APP_URL: "https://telegram.blum.codes",
        gtag:
        {
            enabled: true,
            initMode: "auto",
            id: "G-8P9TCE0QPG",
            initCommands: [],
            config: {},
            tags: [],
            loadingStrategy: "defer",
            url: "https://www.googletagmanager.com/gtag/js"
        }
        , i18n: {
            baseUrl: "",
            defaultLocale: "en",
            defaultDirection: "ltr",
            strategy: "no_prefix",
            lazy: false,
            rootRedirect: "",
            routesNameSeparator: "___",
            defaultLocaleRouteNameSuffix: "default",
            skipSettingLocaleOnNavigate: false,
            differentDomains: false,
            trailingSlash: false,
            configLocales: [
                {
                    code: "en",
                    files: [
                        "/builds/blum/frontend-mini-app/telegram/locales/en.json"
                    ]
                }
            ],
            locales:
            {
                en:
                {
                    domain: ""
                }
            },
            detectBrowserLanguage: false,
            experimental: { localeDetector: "", switchLocalePathLinkSSR: false, autoImportTranslationFunctions: false },
            multiDomainLocales: false
        }
    },
    app: {
        baseURL: "/",
        buildId: "05864e0f-ce0e-47d6-859e-d456cd6e0604",
        buildAssetsDir: "/_dist/",
        cdnURL: ""
    }
}