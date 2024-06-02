import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { Button } from 'core-ui';

function Customers() {
  return (
    <div>
      <NavLink to="dashboard" className="mr-2">
        {({ isActive }) => (
          <Button solid primary={!isActive} secondary={isActive}>
            Dashboard
          </Button>
        )}
      </NavLink>
      <NavLink to="details" className="mr-2">
        {({ isActive }) => (
          <Button solid primary={!isActive} secondary={isActive}>
            Details
          </Button>
        )}
      </NavLink>
      <NavLink to="settings">
        {({ isActive }) => (
          <Button solid primary={!isActive} secondary={isActive}>
            Settings
          </Button>
        )}
      </NavLink>
      <Routes>
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="details" element={<div>Details</div>} />
        <Route path="settings" element={<div>Settings</div>} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Routes>
    </div>
  );
}

export default Customers;
