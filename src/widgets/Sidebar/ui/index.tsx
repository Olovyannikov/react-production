import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'clsx';
import { useToggle } from 'usehooks-ts';

import s from './Sidebar.module.scss';

type SidebarProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export const Sidebar = ({ children, className }: SidebarProps) => {
    const [isOpen, toggle] = useToggle(true);

    return (
        <aside
            className={cn(s.sidebar, className, {
                [String(s.open)]: isOpen,
            })}
        >
            {children}
            some text
            <button onClick={toggle}>Toggle</button>
        </aside>
    );
};