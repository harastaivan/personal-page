import { FormattedMessage, useIntl } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { DottedItems, Headline, Paragraph } from 'modules/ui';

import * as felaRules from './TechnologyGroup.rules';

export interface TechnologyGroupProps {
    group: string;
    extend?: RulesExtend<typeof felaRules>;
}

export const TechnologyGroup = ({ group, extend }: TechnologyGroupProps) => {
    const { rules } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();

    const technologies = formatMessage({ id: `technologies.${group}.items` }).split(', ');

    return (
        <>
            <Headline level={3} extend={{ headline: rules.group }}>
                <FormattedMessage id={`technologies.${group}`} />
            </Headline>
            <Paragraph>
                <DottedItems items={technologies} />
            </Paragraph>
        </>
    );
};
