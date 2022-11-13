import { FormattedMessage, useIntl } from 'react-intl';

import { Avatar, DottedItems, Headline, Section } from 'modules/ui';
import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './IntroductionSection.rules';

export interface IntroductionSectionProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const IntroductionSection = ({ extend }: IntroductionSectionProps) => {
    const { rules } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();

    const tags = formatMessage({ id: 'introduction.tags' }).split(', ');

    return (
        <Section extend={{ section: rules.centeredSection }} reveal={{ origin: 'top', delay: 0 }}>
            <Avatar src="/me.jpeg" fallback={formatMessage({ id: 'introduction.avatarFallback' })} />
            <Headline level={1} extend={{ headline: rules.headline }}>
                <FormattedMessage id="introduction.name" /> <FormattedMessage id="introduction.surname" />
            </Headline>
            <Headline level={3} extend={{ headline: rules.highlightedSubHeadline }}>
                <FormattedMessage id="introduction.job" />
            </Headline>
            <Headline level={3} extend={{ headline: rules.subHeadline }}>
                <DottedItems
                    items={tags}
                    reveal={{ delay: 300, distance: '10px', interval: 300, origin: 'right' }}
                    extend={{ items: rules.items }}
                />
            </Headline>
        </Section>
    );
};
