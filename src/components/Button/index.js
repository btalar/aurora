'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import styles from './style.module.scss';
const Button = ({ primary = false, size = 'medium', label, ...props }) => (_jsx("button", { type: "button", className: cn(styles.button, styles[size], {
        [styles.primary]: primary,
        [styles.secondary]: !primary,
    }), ...props, children: label }));
export { Button };
