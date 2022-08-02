declare module NodeJS {
    export interface ProcessEnv {
        PUBLIC_URL: string;
        NODE_ENV: 'development' | 'production';
        BUILD_ENV: 'development' | 'stage' | 'production' | 'test';
    }
}
