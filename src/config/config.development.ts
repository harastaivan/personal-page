const config = {
    api: {
        base: `https://api-YOU_APP_NAME-development.ack.ee/api`,
    },
    sentry: {
        // TODO: add PUBLIC 'dsn' of your project here:
        dsn: '',
    },
    devTools: true,
};

export type ConfigDevelopment = typeof config;

export default config;
