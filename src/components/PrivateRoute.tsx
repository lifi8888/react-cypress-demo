import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type PrivateRouteProps = {
  children: ReactElement;
};

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
