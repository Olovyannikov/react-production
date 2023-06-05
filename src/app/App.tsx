import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageLazy, IndexPageLazy} from "@/pages";
import {useTheme} from "@/app/providers/ThemeProvider";

import './assets/styles/index.scss';

export const App = () => {
    const {toggleTheme} = useTheme();

    return (
        <>
            <Link to='/'>Main</Link>{' '}
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/' element={<IndexPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </>
    )
}