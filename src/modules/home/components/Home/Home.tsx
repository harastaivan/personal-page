import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Home.rules';

import { IntroductionSection } from '../IntroductionSection';
import { EducationSection } from '../EducationSection';
import { WorkSection } from '../WorkSection';
import { ProjectsSection } from '../ProjectsSection';
import { TechnologiesSection } from '../TechnologiesSection';
import { ContactSection } from '../ContactSection';

export interface HomeProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const Home = ({ extend }: HomeProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.container}>
            <IntroductionSection />
            <EducationSection />
            <WorkSection />
            <ProjectsSection />
            <TechnologiesSection />
            <ContactSection />
        </div>
    );
};
