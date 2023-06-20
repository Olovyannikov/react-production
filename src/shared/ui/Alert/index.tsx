import cn from 'clsx';
import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import type { Range } from '@/shared/lib/types/Range';
import s from './Alert.module.scss';

interface AlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon?: ReactNode;
    onClose?: () => void;
    closeable?: boolean;
    bordered?: boolean;
    closeIcon?: ReactNode;
    color?: string;
    dark?: boolean;
    dense?: boolean; 
    elevation?: Range<0, 5>;
    flat?: boolean;
    inset?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    type?: 'success' | 'info' | 'warning' | 'error';
    border?: 'top' | 'left' | 'right' | 'bottom';
    isVisible?: boolean;
}

export const Alert = ({
    className,
    onClose,
    isVisible = true,
    closeable = false,
    icon,
    closeIcon = <IoClose/>,
    children,
    bordered = false,
    rounded = false,
    color,
    flat,
    dense,
    inset = false,
    elevation = 1,
    dark,
    outlined = false,
    type,
    border,
    ...props
}: AlertProps) => {
    const [hidden, setIsHidden] = useState(isVisible);

    const onCloseHandler = () => setIsHidden(!hidden);

    return (
        <div
            hidden={!isVisible}
            className={cn(s.alert, className, {
                [s[type]]: type,
                [s.inset]: inset,
                [s.outlined]: outlined,
                [s.rounded]: rounded,
                [s.bordered]: bordered,
                [s.flat]: flat,
                [s.dense]: dense,
                [s[`elevation-${elevation}`]]: elevation,
                [s.dark]: dark,
                [s[`border-${border}`]]: border,
            })}
            style={{ '--text-color': color, ...props.style } as CSSProperties}
            {...props}
        >
            {icon && <span className={s.icon}>{icon}</span>}
            {children}
            {closeable &&
                <button className={s.close} onClick={onClose ?? onCloseHandler} type='button'>{closeIcon}</button>}
        </div>
    )
}