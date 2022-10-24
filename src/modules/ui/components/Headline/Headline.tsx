import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Headline.rules';

export interface HeadlineProps {
    level: 1 | 2 | 3 | 4;
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Headline = ({ level, children, extend }: HeadlineProps) => {
    const { styles } = useFelaEnhanced(felaRules, { level, extend });

    if (level === 2) {
        return <h2 className={styles.headline}>{children}</h2>;
    }

    if (level === 3) {
        return <h3 className={styles.headline}>{children}</h3>;
    }

    if (level === 4) {
        return <h4 className={styles.headline}>{children}</h4>;
    }

    return <h1 className={styles.headline}>{children}</h1>;
};
