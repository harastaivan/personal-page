import { FormattedMessage, useIntl } from 'react-intl';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';
import { Link, Paragraph, Section, SectionHeadline } from 'modules/ui';

import * as felaRules from './ContactSection.rules';

export interface ContactSectionProps {
    extend?: RulesExtend<typeof felaRules>;
}

export const ContactSection = ({ extend }: ContactSectionProps) => {
    const { rules } = useFelaEnhanced(felaRules, { extend });
    const { formatMessage } = useIntl();

    return (
        <Section>
            <SectionHeadline level={2}>
                <FormattedMessage id="contact.title" />
            </SectionHeadline>

            <Paragraph>
                <Link href={formatMessage({ id: 'contact.github.url' })}>
                    <FormattedMessage id="contact.github" />
                </Link>
            </Paragraph>

            <Paragraph>
                <Link href={formatMessage({ id: 'contact.linkedin.url' })}>
                    <FormattedMessage id="contact.linkedin" />
                </Link>
            </Paragraph>

            <Paragraph extend={{ paragraph: rules.contactMe }}>
                <FormattedMessage id="contact.contactMe" />
            </Paragraph>
            <Link href={formatMessage({ id: 'contact.email.mailTo' })}>
                <FormattedMessage id="contact.email" />
            </Link>
        </Section>
    );
};
