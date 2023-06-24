import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/main/dashboards/default')),
    },
    {
        key: 'main.ecommerce.product-list',
        path: `${APP_PREFIX_PATH}/main/ecommerce/product-list`,
        component: React.lazy(() => import('views/app-views/main/e-commerce/product-list')),
    },
    {
        key: 'main.orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        component: React.lazy(() => import('views/app-views/main/orders')),
    },
    {
        key: 'main.clients.userList',
        path: `${APP_PREFIX_PATH}/main/clients/user-list`,
        component: React.lazy(() => import('views/app-views/main/clients/user-list')),
    },
    {
        key: 'main.setting',
        path: `${APP_PREFIX_PATH}/main/setting/*`,
        component: React.lazy(() => import('views/app-views/main/setting')),
    },
    {
        key: 'main.scheduler',
        path: `${APP_PREFIX_PATH}/main/scheduler`,
        component: React.lazy(() => import('views/app-views/main/scheduler')),
    }
]