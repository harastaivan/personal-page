import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Section.rules';

export interface SectionProps {
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Section = ({ children, extend }: SectionProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return <section className={styles.section}>{children}</section>;
};
