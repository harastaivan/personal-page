import { useEffect } from 'react';
import scrollReveal from 'scrollreveal';

type UseDefaultOptions = true;
export type ScrollRevealOptions = scrollReveal.ScrollRevealObjectOptions | UseDefaultOptions;

const defaultOptions: scrollReveal.ScrollRevealObjectOptions = {
    delay: 200,
    reset: true,
    distance: '50px',
    interval: 100,
    origin: 'left',
};

export const getSelector = (felaClassNames?: string) =>
    felaClassNames!
        .split(' ')
        .map(className => `.${className}`)
        .join('');

export const useScrollReveal = (selector: string, options?: ScrollRevealOptions) => {
    useEffect(() => {
        if (options === undefined) {
            return;
        }

        const revealOptions = options === true ? defaultOptions : { ...defaultOptions, ...options };

        // eslint-disable-next-line no-console
        console.log(selector);
        scrollReveal().reveal(selector, revealOptions);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
