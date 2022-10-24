import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Dot.rules';

export interface DotProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Dot = ({ extend }: DotProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return <span className={styles.dot}>&middot;</span>;
};
