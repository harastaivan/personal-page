import type { TEnhancer } from 'fela';
import felaMonolithic from 'fela-monolithic';

export const enhancers = [
    process.env.NODE_ENV === 'development' &&
        felaMonolithic({
            prettySelectors: true,
        }),
].filter(Boolean) as TEnhancer[];
