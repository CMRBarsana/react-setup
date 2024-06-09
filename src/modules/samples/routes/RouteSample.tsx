import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { Button } from 'core-ui';

import Admin from './Admin';
import Transactions from './Transactions';

function RouteSample() {
  return (
    <div>
      <NavLink to="dashboard" className="mr-2">
        {({ isActive }) => (
          <Button solid primary={!isActive} secondary={isActive}>
            Dashboard
          </Button>
        )}
      </NavLink>
      <NavLink to="admin" className="mr-2">
        {({ isActive }) => (
          <Button solid primary={!isActive} secondary={isActive}>
            Admin
          </Button>
        )}
      </NavLink>
      <NavLink to="transactions">
        {({ isActive }) => (
          <Button solid primary={!isActive} secondary={isActive}>
            Transactions
          </Button>
        )}
      </NavLink>
      <Routes>
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="admin" element={<Admin />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Routes>
    </div>
  );
}

export default RouteSample;
