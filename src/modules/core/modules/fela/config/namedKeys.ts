const breakpoints = {
    desktop: 1024,
    tablet: 480,
};

const namedKeys = {
    isDesktop: `@media (min-width: ${breakpoints.desktop}px)`,
    isTablet: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
    minTablet: `@media (min-width: ${breakpoints.tablet}px)`,
    isMobile: `@media (max-width: ${breakpoints.tablet - 1}px)`,
};

export default namedKeys;
