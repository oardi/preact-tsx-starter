import { h } from 'preact';

export const FormLabel = ({ children, className, htmlFor }) => <label htmlFor={htmlFor} className={className}>{children}</label>;
