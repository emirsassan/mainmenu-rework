import { useRouteListener } from '@/hooks/event-handler-hooks';
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFound
});

function NotFound() {
    const router = useRouterState();
    
    return (
        <>
            <p>something happened</p>
            <pre>{JSON.stringify(router, null, 2)}</pre>
        </>
    );
}

function RootComponent() {
    useRouteListener();
    
    return (
        <>
            <Outlet />

            <TanStackRouterDevtools />
        </>
    );
}