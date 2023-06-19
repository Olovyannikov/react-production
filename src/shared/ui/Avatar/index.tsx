import s from './Avatar.module.scss';
import cn from 'clsx';
import { ReactNode } from 'react';
import { isNumber } from 'lodash-es';

interface AvatarProps {
    src?: string;
    alt?: string;
    className?: string;
    bgColor?: string;
    color?: string;
    rounded?: boolean;
    size?: 'small' | 'medium' | 'large' | number;
    square?: boolean;
    children?: ReactNode;
}

export const Avatar = ({ src, alt, className, children, color = 'var(--white)', bgColor = 'var(--primary)', size = 'medium', square = false, rounded = false }: AvatarProps) => {
    return (
        <div
            className={cn(s.avatar, className, {
                [s[size]]: size,
                [s.rounded]: rounded,
                [s.square]: square
            })}
            style={{ backgroundColor: bgColor, color, width: isNumber(size) && size, height: isNumber(size) && size }}
        >
            {src && <img src={src} alt={alt}/>}
            {children}
        </div>
    )
}