import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Loader.rules';

export interface LoaderProps {
    show: boolean;
    children?: ReactNode;
    inline?: boolean;
    extend?: RulesExtend<typeof felaRules>;
}

const Loader = ({ show, children = null, inline = false, extend }: LoaderProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend, inline });

    return show ? <div className={styles.loader}>Loading...</div> : <>{children}</>;
};

export default Loader;
