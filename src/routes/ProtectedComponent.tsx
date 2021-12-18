import React from 'react';
import { Navigate } from 'react-router-dom';

interface RouteProps {
  element: React.ReactElement
  hasAccess: boolean,
  defaultPath: string,
}

const ProtectedComponent = function ({ element, hasAccess, defaultPath }: RouteProps) {
  return (
    (hasAccess) ? element
      : (<Navigate to={defaultPath} />)
  );
};

export default ProtectedComponent;
