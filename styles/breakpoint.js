'use client'

const breakpoints = {
    mobile: '720px',
    tablet: '1200px',
    desktop: '1400px',
};

export const mq = Object.keys(breakpoints).reduce((acc, key) => {
    acc[key] = `@media (max-width: ${breakpoints[key]})`;
    return acc;
}, {});
  