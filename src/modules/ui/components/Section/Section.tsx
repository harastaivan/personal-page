import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Section.rules';

import { useScrollReveal, ScrollRevealOptions, getSelector } from '../../hooks';

export interface SectionProps {
    reveal?: ScrollRevealOptions;
    children: ReactNode;
    extend?: RulesExtend<typeof felaRules>;
}

export const Section = ({ reveal, children, extend }: SectionProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    useScrollReveal(getSelector(styles.section), reveal);

    return <section className={styles.section}>{children}</section>;
};
