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

export const useScrollReveal = (
    selector: string | HTMLElement | NodeListOf<Element>,
    options?: ScrollRevealOptions,
) => {
    useEffect(() => {
        if (options === undefined) {
            return;
        }

        const revealOptions = options === true ? defaultOptions : { ...defaultOptions, ...options };

        scrollReveal().reveal(selector, revealOptions);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
