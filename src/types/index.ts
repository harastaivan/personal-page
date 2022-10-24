import type { MessageDescriptor } from 'react-intl';
import type { PrimitiveType } from 'intl-messageformat';

export interface IntlMessage extends MessageDescriptor {
    values?: Record<string, PrimitiveType>;
}
