import cn from 'clsx';
import type { ComponentProps } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { MdOutlineDarkMode, MdSunny } from 'react-icons/md';
import { Switch } from '@/shared/ui/Switch';
import s from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = ComponentProps<'div'>;

export const ThemeSwitcher = ({ className, ...props }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className={cn(s.switch, className)} {...props}>
            <label className={s.icon} htmlFor="switch">
                <MdSunny color={theme === Theme.LIGHT ? 'var(--main-color)' : undefined}/>
            </label>
            <Switch id='switch' onChange={toggleTheme} checked={theme === Theme.DARK}/>
            <label htmlFor="switch" className={s.icon}>
                <MdOutlineDarkMode color={theme === Theme.DARK ? 'var(--main-color)' : undefined}/>
            </label>
        </div>
    )
}