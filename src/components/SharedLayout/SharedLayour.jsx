import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Header, Nav, NavItem } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Nav>
                    <NavItem to='/' end>
                        Home 🏠
                    </NavItem>
                    <NavItem to='/movies'>Movies 📽 </NavItem>
                </Nav>
            </Header>
            <Suspense fallback={<Loader />}>
            <Outlet />
            </Suspense>

        </>
    );
};
export default SharedLayout;