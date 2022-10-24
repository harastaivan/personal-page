import { FormattedMessage } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import { Dot, DottedItems, Headline, Link, Paragraph } from 'modules/ui';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Work.rules';

export interface WorkProps {
    role: string;
    company: string;
    companyUrl: string;
    year: string;
    duration: string;
    description?: string;
    technologies?: string[];
    extend?: RulesExtend<typeof felaRules>;
}

export const Work = ({
    role,
    company,
    companyUrl,
    year,
    duration,
    description,
    technologies = [],
    extend,
}: WorkProps) => {
    const { styles, rules } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.work}>
            <Paragraph>
                {year}
                <Dot />
                {duration}
            </Paragraph>
            <Headline level={3}>
                {role}
                <span className={styles.at}>
                    <FormattedMessage id="work.at" />
                </span>
                <Link href={companyUrl}>{company}</Link>
            </Headline>
            <Paragraph extend={{ paragraph: rules.technologies }}>
                <DottedItems items={technologies} />
            </Paragraph>
            {description && <Paragraph extend={{ paragraph: rules.description }}>{description}</Paragraph>}
        </div>
    );
};
