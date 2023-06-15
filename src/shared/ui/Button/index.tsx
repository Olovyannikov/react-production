import cn from "clsx";
import {Link} from "react-router-dom";
import {ButtonHTMLAttributes, DetailedHTMLProps, ElementType} from "react";
import {Theme, useTheme} from "@/app/providers/ThemeProvider";
import s from './Button.module.scss';

interface ButtonCommonProps<T extends ElementType> extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
                                                             type,
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
    const {theme} = useTheme();
    const classNames = cn(s.button, className, {
        [s.block]: block,
        [s.active]: active,
        [s.bordered]: bordered,
        [s.dark]: dark || theme === Theme.DARK,
        [s.depressed]: depressed,
        [s.outlined]: outlined,
        [s.rounded]: rounded,
        [s[size]]: size,
        [s.text]: text
    })

    const Tag = as || 'button';

    if (to && !!to.length) {
        return <Link className={classNames} aria-disabled={disabled} to={to}
                     style={{backgroundColor: bgColor, color}}>{children}</Link>
    }

    if (Tag === 'a' || (href && !!href.length)) {
        return <a className={classNames} aria-disabled={disabled} href={href} {...download && {download}}
                  style={{backgroundColor: bgColor, color}}
                  target={target}>{children}</a>
    }

    return (
        <Tag className={classNames} {...props} style={{backgroundColor: bgColor, color}}>{children}</Tag>
    )
}