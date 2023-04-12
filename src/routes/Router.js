import { React, lazy, Suspense } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import Loading from '../components/Loading';
import PageLoading from '../components/PageLoading';

const Login = lazy(() => import('../pages/Login/Login'));
const Banners = lazy(() => import('../pages/Banners/Banners'));
const Brands = lazy(() => import('../pages/Brands/Brands'));
const Categories = lazy(() => import('../pages/Categories/Categories'));
const City = lazy(() => import('../pages/City/City'));
const Clients = lazy(() => import('../pages/Clients/Clients'));
const ClientType = lazy(() => import('../pages/ClientType/ClientType'));
const CouponType = lazy(() => import('../pages/CouponType/CouponType'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const DeliveryType = lazy(() => import('../pages/DeliveryType/DeliveryType'));
const DiscountList = lazy(() => import('../pages/DiscountList/DiscountList'));
const GroupSettings = lazy(() => import('../pages/GroupSettings/GroupSettings'));
const Products = lazy(() => import('../pages/Products/Products'));
const Regions = lazy(() => import('../pages/Regions/Regions'));
const SettingsList = lazy(() => import('../pages/SettingsList/SettingsList'));
const SmsTable = lazy(() => import('../pages/SmsTable/SmsTable'));
const Subcategories = lazy(() => import('../pages/Subcategories/Subcategories'));
const SubCategorySetting = lazy(() => import('../pages/SubCategorySetting/SubCategorySetting'));

const SideBarNavbar = lazy(() => import('./SidebarNavbar'));

function Router() {
    let routes = useRoutes([
        {
            element: <Suspense fallback={<PageLoading />}><Login /></Suspense>,
            path: '/administrator',
        },
        {
            element: <Suspense fallback={<PageLoading />}><SideBarNavbar /></Suspense>,
            children: [
                {
                    element: <Suspense fallback={<Loading />}><Dashboard /></Suspense>,
                    path: '/administrator/dashboard'
                },
                {
                    element: <Suspense fallback={<Loading />}><Banners /></Suspense>,
                    path: '/administrator/banners'
                },
                {
                    element: <Suspense fallback={<Loading />}><Brands /></Suspense>,
                    path: '/administrator/brands'
                },
                {
                    element: <Suspense fallback={<Loading />}><Categories /></Suspense>,
                    path: '/administrator/categories'
                },
                {
                    element: <Suspense fallback={<Loading />}><City /></Suspense>,
                    path: '/city'
                },
                {
                    element: <Suspense fallback={<Loading />}><Clients /></Suspense>,
                    path: '/administrator/clients'
                },
                {
                    element: <Suspense fallback={<Loading />}><ClientType /></Suspense>,
                    path: '/administrator/clientType'
                },
                {
                    element: <Suspense fallback={<Loading />}><CouponType /></Suspense>,
                    path: '/administrator/couponType'
                },
                {
                    element: <Suspense fallback={<Loading />}><DiscountList /></Suspense>,
                    path: '/administrator/discountList'
                },
                {
                    element: <Suspense fallback={<Loading />}><GroupSettings /></Suspense>,
                    path: '/administrator/groupSettings'
                },
                {
                    element: <Suspense fallback={<Loading />}><Products /></Suspense>,
                    path: '/administrator/products'
                },
                {
                    element: <Suspense fallback={<Loading />}><Regions /></Suspense>,
                    path: '/administrator/regions'
                },
                {
                    element: <Suspense fallback={<Loading />}><SettingsList /></Suspense>,
                    path: '/administrator/settingsList'
                },
                {
                    element: <Suspense fallback={<Loading />}><SmsTable /></Suspense>,
                    path: '/administrator/smsTable'
                },
                {
                    element: <Suspense fallback={<Loading />}><Subcategories /></Suspense>,
                    path: '/administrator/subcategories'
                },
                {
                    element: <Suspense fallback={<Loading />}><SubCategorySetting /></Suspense>,
                    path: '/administrator/subcategorySettings'
                },
                {
                    element: <Suspense fallback={<Loading />}><DeliveryType /></Suspense>,
                    path: '/administrator/deliveryType'
                },
            ]
        },
        // {
        //     element: <Navigate to='/administrator' />,
        //     path: '*'
        // }
    ]);
    return routes;
}

export default Router;