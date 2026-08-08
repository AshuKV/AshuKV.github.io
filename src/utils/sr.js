const isSSR = typeof window === 'undefined';
// lazy import to avoid miniraf accessing window during SSR
const sr = isSSR ? null : require('scrollreveal').default();

export default sr;
