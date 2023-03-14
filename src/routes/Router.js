import { React, lazy, Suspense } from 'react';
import { useRoutes } from "react-router-dom";
import Loading from '../components/Loading';

const Login = lazy(() => import('../pages/Login/Login'));
const SideBarNavbar = lazy(() => import('./SidebarNavbar'));

function Router() {
    let routes = useRoutes([
        {
            element: <Suspense fallback={<Loading size='60px' />}><Login /></Suspense>,
            path: '/',
        },
        {
            element: <Suspense fallback={<Loading size='60px' />}><SideBarNavbar /></Suspense>,
            path: '/dashboard'
        }
    ]);
    return routes;
}

export default Router;