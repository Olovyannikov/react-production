import { Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';

import './styles/index.scss';

export const App = () => {
    return (
        <Suspense fallback='Loading translations...'>
            <AppRouter/>
        </Suspense>
    )
} 