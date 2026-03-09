import { lazy } from 'react';

import { createBrowserRouter, Navigate, type RouteObject } from 'react-router';

import { AppLayout } from '@/components/layouts/AppLayout';
import { ProtectedRoute } from '@/components/layouts/ProtectedRoute';
import { ResponsiveAuthLayout } from '@/components/layouts/ResponsiveAuthLayout';
import { ROUTERS } from '@/config/routeConfig';

import { appRouteObjects } from './app';
import { authRouteObjects } from './auth';
import {
  HomePage,
  NotFound,
} from './components';
import { configRouteObjects } from './config';
import { deliveryRouteObjects } from './delivery';
import { managementRouteObjects } from './management';
import { salesRouteObjects } from './sales';

// Type for route with theme metadata
export type ThemeRouteObject = RouteObject & {
  theme?: string;
  children?: ThemeRouteObject[];
};

export const routeObjects: ThemeRouteObject[] = [
  // Root route
  {
    path: ROUTERS.ROOT,
    Component: () => <Navigate to={ROUTERS.LOGIN} />,
  },
  ...authRouteObjects,
  {
    path: '',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: ROUTERS.HOME, Component: HomePage },
      ...configRouteObjects,
      ...managementRouteObjects,
      ...salesRouteObjects,
      ...deliveryRouteObjects,
    ],
  },
  {
    path: '',
    element: (
      <ProtectedRoute>
        <ResponsiveAuthLayout />
      </ProtectedRoute>
    ),
    children: [...appRouteObjects],
  },
];

const ServiceLayout = lazy(async () => {
  const module = await import('@/components/layouts/ServiceLayout');
  return { default: module.ServiceLayout };
});

export const router = createBrowserRouter([
  {
    path: '/',
    Component: ServiceLayout,
    children: routeObjects,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);
