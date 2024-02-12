import cn from 'clsx';
import type { ComponentProps } from 'react';
import { AppLink } from '@/shared/ui/AppLink';
import { ThemeSwitcher, LangSwitcher } from '@/widgets';
import s from './Navbar.module.scss';

type NavbarProps = ComponentProps<'ul'>;

export const Navbar = ({ className, ...props }: NavbarProps) => {
    return (
        <nav className={s.nav}>
            <ThemeSwitcher>Сменить тему</ThemeSwitcher>
            <ul className={cn(s.list, className)} {...props}>
                <li>
                    <AppLink to='/'>Main</AppLink>
                </li>
                <li>
                    <AppLink to='/about'>About</AppLink>
                </li>
            </ul>
            <LangSwitcher/>
        </nav>
    )
}