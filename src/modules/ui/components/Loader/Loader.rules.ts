import type { TRuleWithTheme } from 'styles/theme';
import type { LoaderProps } from './Loader';

type StyleProps = Required<Pick<LoaderProps, 'inline'>>;

export const loader: TRuleWithTheme<StyleProps> = ({ inline }) => {
    const style = {
        background: 'white',
        height: '100%',
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: '5rem',
        minHeight: '5rem',
    };

    if (!inline) {
        Object.assign(style, {
            position: 'absolute',
            top: 0,
            left: 0,
        });
    }

    return style;
};
