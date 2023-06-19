import cn from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AppLink } from '@/shared/ui/AppLink';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ui';
import { LangSwitcher } from '@/widgets/LangSwitcher/ui';
import s from './Navbar.module.scss';

type NavbarProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export const Navbar = ({ className, ...props }: NavbarProps) => {
    return (
        <>
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
            <hr className={s.hr}/>
        </>
    )
}