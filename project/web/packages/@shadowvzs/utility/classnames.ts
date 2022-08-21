const cn = (...classnames: string[]): string => classnames.filter(Boolean).join(' ');
export default cn;

