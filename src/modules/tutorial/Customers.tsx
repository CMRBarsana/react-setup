import { Navigate, Route, Routes } from 'react-router-dom';

function Customers() {
  return (
    <Routes>
      <Route path="details" element={<div>Details</div>} />
      <Route path="settings" element={<div>settings</div>} />
      <Route path="*" element={<Navigate to="details" />} />
    </Routes>
  );
}

export default Customers;
