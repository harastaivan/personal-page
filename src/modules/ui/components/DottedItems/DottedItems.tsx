import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './DottedItems.rules';
import { Dot } from '../Dot';
import { getSelector, ScrollRevealOptions, useScrollReveal } from '../../hooks';

export interface DottedItemsProps {
    items: string[];
    reveal?: ScrollRevealOptions;
    extend?: RulesExtend<typeof felaRules>;
}

export const DottedItems = ({ items, reveal, extend }: DottedItemsProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    useScrollReveal(`${getSelector(styles.items)} > span`, reveal);

    return (
        <div className={styles.items}>
            {items.map((item, index) => (
                <span>
                    {index !== 0 && <Dot />}
                    <span>{item}</span>
                </span>
            ))}
        </div>
    );
};
