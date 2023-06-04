import {Suspense, useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {IndexPageLazy} from "./pages/IndexPage/index.lazy";
import {AboutPageLazy} from "./pages/AboutPage/index.lazy";

import './assets/styles/index.scss';
import {useTheme} from "./theme/useTheme";


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