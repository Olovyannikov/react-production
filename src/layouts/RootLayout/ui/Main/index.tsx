import cn from "clsx";
import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Sidebar} from "@/widgets/Sidebar";
import s from './Main.module.scss';

interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
}

export const Main = ({className, children, ...props}: MainProps) => {
    return (
        <div className={s.wrapper}>
            <Sidebar className={s.aside}/>
            <main className={cn(s.main, className)} {...props}>{children}</main>
        </div>
    )
}