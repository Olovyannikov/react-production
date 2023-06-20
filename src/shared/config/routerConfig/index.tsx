import { RouteProps } from 'react-router-dom';
import { AboutPageLazy, IndexPageLazy, NotFoundPageLazy } from '@/pages';

export enum AppRoutes {
    INDEX = 'index',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.INDEX]: {
        path: RouterPaths.index,
        element: <IndexPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPageLazy />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.notFound,
        element: <NotFoundPageLazy />,
    },
};
