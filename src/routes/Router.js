import { React, lazy, Suspense } from 'react';
import { useRoutes } from "react-router-dom";

const Login = lazy(() => import('../pages/Login/Login'));

function Router() {
    let routes = useRoutes([
        {
            element: <Suspense fallback={<Loading size='60px' />}><Category /></Suspense>,
            children: [
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><Home /></Suspense>,
                    path: '/'
                },
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><ProductDetails /></Suspense>,
                    path: '/products/:id'
                },
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><ProductsCategory /></Suspense>,
                    path: '/category/:id'
                },
                {
                    element: <Suspense fallback={<LoadingSpin size='60px' />}><ProductsSubCategory /></Suspense>,
                    path: '/subcategory/:id'
                }
            ]
        },

    ]);
    return routes;
}

export default Router;