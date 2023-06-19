import { DetailedHTMLProps, HTMLAttributes } from 'react';
import s from './Sidebar.module.scss';
import cn from 'clsx';
import { useToggle } from '@/shared/hooks';

type SidebarProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export const Sidebar = ({ children, className }: SidebarProps) => {
    const [isOpen, toggle] = useToggle(true);

    return (
        <aside
            className={cn(s.sidebar, className, {
                [s.open]: isOpen
            })}
        >
            {children}
            <button onClick={toggle}>Toggle</button>
        </aside>
    )
}