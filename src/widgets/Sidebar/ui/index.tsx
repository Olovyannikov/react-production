import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import cn from 'clsx';
import { useToggle } from 'usehooks-ts';

import s from './Sidebar.module.scss';

type SidebarProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export const Sidebar = ({ children, className }: SidebarProps) => {
    const [isOpen, toggle] = useToggle(true);

    return (
        <aside
            role='application'
            aria-expanded={isOpen}
            className={cn(s.sidebar, className, {
                [String(s.open)]: isOpen,
            })}
        >
            <header className={s.header}>
                <button data-testid='sidebar-toggle' className={cn(s.toggle, isOpen && s.open)} onClick={toggle}>
                    {isOpen ? <FiChevronsLeft size={24} /> : <FiChevronsRight size={24} />}
                </button>
            </header>
            {children}
        </aside>
    );
};