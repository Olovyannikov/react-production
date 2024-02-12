import { Navbar } from '@/widgets';
import s from './Header.module.scss';

export const Header = () => {
    return (
        <header className={s.root}>
            <Navbar/>
        </header>
    )
}