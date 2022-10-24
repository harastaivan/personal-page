import { FormattedMessage } from 'react-intl';

import { Paragraph, Section, SectionHeadline } from 'modules/ui';

import { TechnologyGroup } from './TechnologyGroup';

export interface TechnologiesSectionProps {}

export const TechnologiesSection = (props: TechnologiesSectionProps) => (
    <Section>
        <SectionHeadline level={2}>
            <FormattedMessage id="technologies.title" />
        </SectionHeadline>

        <Paragraph>
            <FormattedMessage id="technologies.description" />
        </Paragraph>

        <TechnologyGroup group="languages" />
        <TechnologyGroup group="frameworks" />
        <TechnologyGroup group="libraries" />
        <TechnologyGroup group="apis" />
    </Section>
);
