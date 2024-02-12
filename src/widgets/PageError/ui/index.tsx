import s from './PageError.module.scss';
import type { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { reloadPageHandler } from '@/shared/lib/utils';
import { Flex, Button, Container, Typography } from '@/shared/ui';

type PageErrorProps = ComponentProps<'div'>;

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <Container className={className}>
            <Flex justify='center' align='center' vertical gap='var(--size-xl)' className={s.root}>
                <Typography variant='h4'>
                    {t('Произошла непредвиденная ошибка')}
                </Typography>
                <Button onClick={reloadPageHandler}>
                    {t('Обновить страницу')}
                </Button>
            </Flex></Container>
    )
}