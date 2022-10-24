import type { TEnhancer } from 'fela';
import felaMonolithic from 'fela-monolithic';

import { isTruthy } from 'types/guards';

export const enhancers = [
    process.env.NODE_ENV === 'development' &&
        felaMonolithic({
            prettySelectors: true,
        }),
].filter(isTruthy) as TEnhancer[];
