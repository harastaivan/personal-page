import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import type { AvatarImageProps } from '@radix-ui/react-avatar';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles/theme';

import * as felaRules from './Avatar.rules';

export interface AvatarProps extends AvatarImageProps {
    fallback?: string;
    size?: number;
    extend?: RulesExtend<typeof felaRules>;
}

export const Avatar = ({ fallback, size, extend, ...props }: AvatarProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend, size });

    return (
        <Root className={styles.root}>
            <Image className={styles.image} {...props} />
            <Fallback className={styles.fallback}>{fallback}</Fallback>
        </Root>
    );
};
