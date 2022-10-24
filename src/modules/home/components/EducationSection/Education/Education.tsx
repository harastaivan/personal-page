import type { ReactNode } from 'react';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { Headline, Link, Paragraph } from 'modules/ui';

import * as felaRules from './Education.rules';

export interface EducationProps {
    from: ReactNode;
    to: ReactNode;
    school: ReactNode;
    faculty?: ReactNode;
    degree?: ReactNode;
    field?: ReactNode;
    specialization?: ReactNode;

    work?: {
        type: ReactNode;
        topic: ReactNode;
        title: ReactNode;
        links: {
            url: string;
            label: string;
        }[];
    };

    extend?: RulesExtend<typeof felaRules>;
}

export const Education = ({
    from,
    to,
    school,
    faculty,
    degree,
    field,
    specialization,
    work,
    extend,
}: EducationProps) => {
    const { styles, rules } = useFelaEnhanced(felaRules, { extend });

    return (
        <div className={styles.education}>
            <Paragraph>
                <span>{from}</span>
                <span> &ndash; </span>
                <span>{to}</span>
            </Paragraph>
            <Headline level={3}>
                {school} {faculty}
            </Headline>
            {degree && <Paragraph extend={{ paragraph: rules.subsectionTitle }}>{degree}</Paragraph>}
            {field && specialization && (
                <Paragraph>
                    <span>{field} </span>
                    <span className={styles.highlighted}>{specialization}</span>
                </Paragraph>
            )}
            {work && (
                <div className={styles.work}>
                    <div>
                        <Paragraph extend={{ paragraph: rules.subsectionTitle }}>{work.type}</Paragraph>
                        <Paragraph>
                            <span>{work.topic} </span>
                            <span className={styles.highlighted}>{work.title}</span>
                        </Paragraph>
                    </div>

                    <div className={styles.links}>
                        {work.links.map(link => (
                            <Paragraph>
                                <Link href={link.url}>{link.label}</Link>
                            </Paragraph>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
