import type { ComponentProps, ElementType } from 'react';
import cn from 'clsx';
import s from './Flex.module.scss';

type Justify =
    'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-evenly'
    | 'space-between'
    | 'space-around'
    | 'left'
    | 'right'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'unset';
type Align = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'inherit' | 'initial' | 'unset';

interface FlexProps<T extends ElementType> extends ComponentProps<'div'> {
    as?: T;
    vertical?: boolean;
    gap?: string | number;
    justify?: Justify;
    align?: Align;
}

export const Flex = <T extends ElementType = 'div'>({
    as,
    children,
    vertical = false,
    gap,
    className, justify, align
}: FlexProps<T>) => {
    const Tag = as ?? 'div';

    const classes = cn(s.root, className, {
        [s.vertical]: vertical,
        [s.justifyCenter]: justify === 'center',
        [s.alignCenter]: align === 'center'
    })

    return (
        <Tag className={classes} style={{ gap }}>{children}</Tag>
    )
}