import {RouteProps} from "react-router-dom";
import {AboutPageLazy, IndexPageLazy} from "@/pages";

export enum AppRoutes {
    INDEX = 'index',
    ABOUT = 'about'
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.INDEX]: {
        path: RouterPaths.index,
        element: <IndexPageLazy/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPageLazy/>
    }
}