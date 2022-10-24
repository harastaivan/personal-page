import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import config from 'config';

import * as felaRules from './Footer.rules';

export interface FooterProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Footer = ({ extend }: FooterProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.footer}>
            <FormattedMessage id="footer.title" />
            <div className={styles.version}>
                <FormattedMessage id="footer.version" />
                <span> {config.appVersion}</span>
            </div>
        </div>
    );
};
