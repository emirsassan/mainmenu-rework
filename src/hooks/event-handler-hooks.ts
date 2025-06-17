import { useEffect } from 'react';
import type { UpdateRouteEvent } from '@/entities/events.ts';
import { useNavigate } from 'react-router-dom';

export const useRouteListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUpdateRoute = (data: UpdateRouteEvent) => {
      navigate(data.detail.route);
      console.log(data.detail.route);
      window.lunar.setActiveRoute(data.detail.route);
    };
    window.lunar.subscribe('route', handleUpdateRoute);

    return () => {
      window.lunar.unsubscribe('route', handleUpdateRoute);
    };
  }, [navigate]);
};