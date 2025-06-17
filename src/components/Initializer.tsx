import { useRouteListener } from '@/hooks/event-handler-hooks.ts';
import { Outlet } from 'react-router-dom';

export const Initializer = () => {
  useRouteListener();

  return <Outlet />;
};