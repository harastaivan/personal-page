import { setLocale, translateSelector } from '@ackee/jerome';
import { useIntl } from 'react-intl';

import { useAppDispatch, useAppSelector, useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { Avatar } from 'modules/ui';

import * as felaRules from './LanguageSwitcher.rules';
import { availableLanguages } from '../../constants';

const flags = {
    [availableLanguages.CS]: '/flags/uk.svg',
    [availableLanguages.EN]: '/flags/cz.svg',
};

const fallbacks = {
    [availableLanguages.CS]: 'uk',
    [availableLanguages.EN]: 'cz',
};

const nextLocale = {
    [availableLanguages.CS]: availableLanguages.EN,
    [availableLanguages.EN]: availableLanguages.CS,
};

export interface LanguageSwitcherProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const LanguageSwitcher = ({ extend }: LanguageSwitcherProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();
    const dispatch = useAppDispatch();
    const { locale } = useAppSelector(translateSelector);

    const flag = flags[locale];
    const fallback = fallbacks[locale];

    const switchLocale = () => {
        dispatch(setLocale(nextLocale[locale]));
    };

    return (
        <div className={styles.container}>
            <Avatar
                src={flag}
                fallback={fallback}
                alt={formatMessage({ id: 'language.switch' })}
                size={40}
                onClick={switchLocale}
            />
        </div>
    );
};
