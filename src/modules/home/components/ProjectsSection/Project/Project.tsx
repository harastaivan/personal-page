import { FormattedMessage, useIntl } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import { DottedItems, Headline, Link, Paragraph } from 'modules/ui';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Project.rules';

export interface ProjectProps {
    name: string;
    extend?: RulesExtend<typeof felaRules>;
}

export const Project = ({ name, extend }: ProjectProps) => {
    const { styles, rules } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();

    const technologies = formatMessage({ id: `projects.${name}.technologies` }).split(', ');
    const accomplishments = formatMessage({ id: `projects.${name}.accomplishments` }).split(', ');

    return (
        <div className={styles.project}>
            <Paragraph>
                <FormattedMessage id={`projects.${name}.duration`} />
            </Paragraph>

            <Headline level={3}>
                <FormattedMessage id={`projects.${name}.title`} />
            </Headline>

            <Paragraph extend={{ paragraph: rules.description }}>
                <FormattedMessage id={`projects.${name}.description`} />
            </Paragraph>

            <Paragraph extend={{ paragraph: rules.technologies }}>
                {accomplishments.map(accomplishment => (
                    <div>
                        <span className={styles.highlighted}> &#8211; </span>
                        {accomplishment}
                    </div>
                ))}
            </Paragraph>

            <Paragraph extend={{ paragraph: rules.technologies }}>
                <DottedItems items={technologies} />
            </Paragraph>

            <Paragraph extend={{ paragraph: rules.link }}>
                <Link href={formatMessage({ id: `projects.${name}.link.url` })}>
                    <FormattedMessage id={`projects.${name}.link.label`} />
                </Link>
            </Paragraph>
        </div>
    );
};
