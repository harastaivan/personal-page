import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './DottedItems.rules';
import { Dot } from '../Dot';

export interface DottedItemsProps {
    items: string[];
    extend?: RulesExtend<typeof felaRules>;
}

export const DottedItems = ({ items, extend }: DottedItemsProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

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
