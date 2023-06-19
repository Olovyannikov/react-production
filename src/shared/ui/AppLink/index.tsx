import cn from 'clsx';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}

export const AppLink = ({ children, className, theme = AppLinkTheme.PRIMARY, ...props }: AppLinkProps) => {
    return (
        <Link
            className={cn(s.link, className, {
                [s[theme]]: theme
            })}
            {...props}
        >{children}</Link>
    )
}