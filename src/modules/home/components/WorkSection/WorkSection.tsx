import { FormattedMessage, useIntl } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import { Section, SectionHeadline } from 'modules/ui';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './WorkSection.rules';
import { Work } from './Work';

const companies = ['ackee', 'koala', 'bayer', 'footshop2', 'footshop1'];

export interface WorkSectionProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const WorkSection = ({ extend }: WorkSectionProps) => {
    const { rules } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();

    return (
        <Section extend={{ section: rules.container }}>
            <SectionHeadline level={2}>
                <FormattedMessage id="work.title" />
            </SectionHeadline>

            {companies.map(company => (
                <Work
                    role={formatMessage({ id: `work.${company}.role` })}
                    company={formatMessage({ id: `work.${company}.company` })}
                    companyUrl={formatMessage({ id: `work.${company}.company.url` })}
                    year={formatMessage({ id: `work.${company}.year` })}
                    duration={formatMessage({ id: `work.${company}.duration` })}
                    description={formatMessage({ id: `work.${company}.description` })}
                    technologies={formatMessage({ id: `work.${company}.technologies` }).split(', ')}
                />
            ))}
        </Section>
    );
};
