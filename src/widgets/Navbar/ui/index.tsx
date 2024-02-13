import type { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';

import { AppLink } from '@/shared/ui/AppLink';
import { LangSwitcher,ThemeSwitcher } from '@/widgets';

import s from './Navbar.module.scss';

type NavbarProps = ComponentProps<'ul'>;

export const Navbar = ({ className, ...props }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <nav className={s.nav}>
            <ThemeSwitcher>Сменить тему</ThemeSwitcher>
            <ul className={cn(s.list, className)} {...props}>
                <li>
                    <AppLink to='/'>{t('Главная')}</AppLink>
                </li>
                <li>
                    <AppLink to='/about'>About</AppLink>
                </li>
            </ul>
            <LangSwitcher />
        </nav>
    );
};