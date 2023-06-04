import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {IndexPageLazy} from "./pages/IndexPage/index.lazy";
import {AboutPageLazy} from "./pages/AboutPage/index.lazy";

export const App = () => {
    return (
        <>
            <Link to='/'>Main</Link>{' '}
            <Link to='/about'>About</Link>
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/' element={<IndexPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </>
    )
}