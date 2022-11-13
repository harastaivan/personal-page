import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { Section, SectionHeadline } from 'modules/ui';

import * as felaRules from './ProjectsSection.rules';
import { Project } from './Project';

const projects = ['tcup', 'personalPage', 'terapio', 'refrec'];

export interface ProjectsSectionProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const ProjectsSection = ({ extend }: ProjectsSectionProps) => {
    const { rules } = useFelaEnhanced(felaRules, { extend });

    return (
        <Section extend={{ section: rules.container }} reveal>
            <SectionHeadline level={2}>
                <FormattedMessage id="projects.title" />
            </SectionHeadline>

            {projects.map(project => (
                <Project name={project} />
            ))}
        </Section>
    );
};
