import type { ReactElement } from 'react';
interface Props {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}
declare const Button: ({ primary, size, label, ...props }: Props) => ReactElement;
export { Button };
//# sourceMappingURL=index.d.ts.map