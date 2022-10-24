import { FormattedMessage, useIntl } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { Section, SectionHeadline } from 'modules/ui';

import * as felaRules from './EducationSection.rules';
import { Education } from './Education';

export interface EducationSectionProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const EducationSection = ({ extend }: EducationSectionProps) => {
    const { rules } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();

    return (
        <Section extend={{ section: rules.container }}>
            <SectionHeadline level={2}>
                <FormattedMessage id="education.title" />
            </SectionHeadline>

            <Education
                from={<FormattedMessage id="education.engineer.from" />}
                to={<FormattedMessage id="education.engineer.to" />}
                school={<FormattedMessage id="education.engineer.school" />}
                faculty={<FormattedMessage id="education.engineer.faculty" />}
                degree={<FormattedMessage id="education.engineer.degree" />}
                field={<FormattedMessage id="education.engineer.field" />}
                specialization={<FormattedMessage id="education.engineer.specialization" />}
            />

            <Education
                from={<FormattedMessage id="education.bachelor.from" />}
                to={<FormattedMessage id="education.bachelor.to" />}
                school={<FormattedMessage id="education.bachelor.school" />}
                faculty={<FormattedMessage id="education.bachelor.faculty" />}
                degree={<FormattedMessage id="education.bachelor.degree" />}
                field={<FormattedMessage id="education.bachelor.field" />}
                specialization={<FormattedMessage id="education.bachelor.specialization" />}
                work={{
                    type: <FormattedMessage id="education.bachelor.work.type" />,
                    topic: <FormattedMessage id="education.bachelor.work.topic" />,
                    title: <FormattedMessage id="education.bachelor.work.title" />,
                    links: [1, 2, 3, 4].map(index => ({
                        url: formatMessage({ id: `education.bachelor.work.link${index}` }),
                        label: formatMessage({ id: `education.bachelor.work.link${index}.label` }),
                    })),
                }}
            />

            <Education
                from={<FormattedMessage id="education.highSchool.from" />}
                to={<FormattedMessage id="education.highSchool.to" />}
                school={<FormattedMessage id="education.highSchool.school" />}
            />
        </Section>
    );
};
