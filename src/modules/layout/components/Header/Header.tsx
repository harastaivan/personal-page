import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { SectionHeadline } from 'modules/ui';

import * as felaRules from './Header.rules';

export interface HeaderProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Header = ({ extend }: HeaderProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.header}>
            <SectionHeadline level={4} inverted>
                <FormattedMessage id="header.title" />
            </SectionHeadline>
        </div>
    );
};
