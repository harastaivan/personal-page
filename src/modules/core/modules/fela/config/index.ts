import type { IConfig } from 'fela';
import { isEnvDevelopment } from 'constants/index';

import { plugins } from './plugins';
import { enhancers } from './enhancers';

export const rendererConfig: IConfig = {
    devMode: isEnvDevelopment,
    enhancers,
    plugins,
};
