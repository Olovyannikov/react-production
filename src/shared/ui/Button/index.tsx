import type { ComponentProps, ElementType } from 'react';
import { Link } from 'react-router-dom';
import cn from 'clsx';

import { Theme, useTheme } from '@/app/providers/ThemeProvider';

import s from './Button.module.scss';

interface ButtonCommonProps<T extends ElementType> extends ComponentProps<'button'> {
    href?: string;
    to?: string;
    as?: T;
    target?: HTMLAnchorElement['target'];
    download?: HTMLAnchorElement['download'];
    dark?: boolean;
    size?: 'small' | 'medium' | 'large';
    text?: boolean;
    block?: boolean;
    active?: boolean;
    rounded?: boolean;
    bordered?: boolean;
    outlined?: boolean;
    depressed?: boolean;
    bgColor?: string;
    color?: string;
}

export const Button = <T extends ElementType = 'button'>({
    as,
    to,
    href,
    target = '_blank',
    download,
    children,
    className,
    block = false,
    active = false,
    dark = false,
    outlined = false,
    depressed = false,
    bordered = false,
    disabled = false,
    text = false,
    rounded = false,
    color,
    size = 'medium',
    bgColor,
    ...props
}: ButtonCommonProps<T>) => {
    const { theme } = useTheme();
    const classNames = cn(s.button, className, {
        [s.block]: block,
        [s.active]: active,
        [s.bordered]: bordered,
        [s.dark]: dark || theme === Theme.DARK,
        [s.depressed]: depressed,
        [s.outlined]: outlined,
        [s.rounded]: rounded,
        [s[size]]: size,
        [s.text]: text,
    });

    const Tag = as || 'button';

    if (to && Boolean(to.length)) {
        return (
            <Link
                className={classNames}
                aria-disabled={disabled}
                to={to}
                style={{ backgroundColor: bgColor, color }}
            >
                {children}
            </Link>
        );
    }

    if (Tag === 'a' || (href && Boolean(href.length))) {
        return (
            <a
                className={classNames}
                aria-disabled={disabled}
                href={href}
                {...download && { download }}
                style={{ backgroundColor: bgColor, color }}
                target={target}
            >
                {children}
            </a>
        );
    }

    return (
        <Tag className={classNames} {...props} style={{ backgroundColor: bgColor, color }}>{children}</Tag>
    );
};