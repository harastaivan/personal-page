import type { ReactNode } from 'react';
import { Translatable } from '@ackee/jerome';
import { intlData } from '../../config';

interface AppLocalizationsProps {
    children: ReactNode | ReactNode[];
}

export const Localizations = ({ children }: AppLocalizationsProps) => (
    <Translatable intlMessages={intlData}>{children}</Translatable>
);
