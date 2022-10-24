import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import type { colors } from 'styles/theme/colors';

import * as felaRules from './Headline.rules';

export interface HeadlineProps {
    level: 1 | 2 | 3 | 4;
    color?: keyof typeof colors;
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Headline = ({ level, color, children, extend }: HeadlineProps) => {
    const { styles } = useFelaEnhanced(felaRules, { level, color, extend });

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
