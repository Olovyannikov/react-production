import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/shared/config/routerConfig';
import { PageLoader } from '@/shared/ui/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routerConfig).map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </Suspense>
    );
};

