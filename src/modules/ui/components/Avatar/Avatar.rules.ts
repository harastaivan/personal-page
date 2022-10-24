import type { TRuleWithTheme } from 'styles/theme';

import type { AvatarProps } from './Avatar';

type StyleProps = Pick<AvatarProps, 'size'>;

export const root: TRuleWithTheme<StyleProps> = ({ size = 150 }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: size,
    height: size,
    borderRadius: '100%',
});

export const image: TRuleWithTheme = () => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
});

export const fallback: TRuleWithTheme = ({ theme: { colors } }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    color: colors.bgPrimary,
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 500,
});
