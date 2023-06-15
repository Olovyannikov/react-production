import s from './Switch.module.scss';
import {ReactNode} from "react";
import cn from "clsx";

interface SwitchProps {
    id?: string;
    children?: ReactNode;
    className?: string;
    onChange?: () => void;
    checked?: boolean;
}

export const Switch = ({id = 'switch-checkbox', onChange, checked, children, className}: SwitchProps) => {
    return (
        <div className={cn(s.switch, className)}>
            <input id={id} type="checkbox" className={s.checkbox} onChange={onChange} checked={checked}/>
            <label htmlFor={id}>
                <p>{children}</p>
            </label>
        </div>
    )
}