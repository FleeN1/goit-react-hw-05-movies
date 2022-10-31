import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to='/' end>
                        Home🏠
                    </NavLink>
                    <NavLink to='/movies'>Movies 📽 </NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
};
export default SharedLayout;