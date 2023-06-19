import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </>
    )
}