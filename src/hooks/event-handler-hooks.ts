import { useEffect } from 'react';
import type { UpdateRouteEvent } from '@/entities/events.ts';
import { useLocation, useNavigate } from 'react-router-dom';

export const useRouteListener = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!window.lunar) return; // browser environment

    const handleUpdateRoute = (data: UpdateRouteEvent) => {
      window.lunar.setActiveRoute(data.detail.route);
      if (data.detail.route === '/') {
        if (location.pathname === '/blank') {
          navigate('/home');
        } else {
          navigate('/blank');
        }
      } else {
        navigate(data.detail.route);
      }
    };
    window.lunar.subscribe('route', handleUpdateRoute);

    return () => {
      window.lunar.unsubscribe('route', handleUpdateRoute);
    };
  }, [navigate]);
};