const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

export const mq = Object.keys(breakpoints).reduce((acc, key) => {
    acc[key] = `@media (min-width: ${breakpoints[key]})`;
    return acc;
}, {});
  