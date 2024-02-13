import { RootLayout } from '@/layouts/RootLayout/ui';
import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui';

export default function IndexPage() {
    return (
        <RootLayout>
            <Container>
                <Button>Some btn</Button>
            </Container>
        </RootLayout>
    );
}