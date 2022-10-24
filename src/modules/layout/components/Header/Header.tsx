import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Header.rules';

export interface HeaderProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Header = ({ extend }: HeaderProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.header}>
            <span className={styles.prefix}>
                <FormattedMessage id="headline.prefix" />
            </span>
            <FormattedMessage id="header.title" />
        </div>
    );
};
