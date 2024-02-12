import { RootLayout } from '@/layouts/RootLayout/ui';
import { Container } from '@/shared/ui/Container';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import s from './NotFound.module.scss';

export default function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <RootLayout>
            <section>
                <Container className={s.notFound}>
                    <Typography variant="h3">404</Typography>
                    <Typography variant="h3">
                        {t('Страница не найдена')}
                    </Typography>
                    <Button to="/" size="large">
                        Вернуться на главную
                    </Button>
                </Container>
            </section>
        </RootLayout>
    );
}
