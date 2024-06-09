import { Route, Routes, useNavigate } from 'react-router-dom';

import { Button } from 'core-ui';

function Admin() {
  const navigate = useNavigate();
  // console.log('navigate: ', navigate)

  const handleRoute = (url: string) => {
    navigate(url);
  };

  return (
    <div>
      {/* Programmatically route */}
      <div className="mb-20">
        <Button solid success onClick={() => handleRoute('/route/admin/details')}>
          Details
        </Button>
        <Button solid success onClick={() => handleRoute('/route/admin/settings')}>
          Settings
        </Button>
      </div>

      <div>
        <Routes>
          <Route path="admin/details" element={<div>Details</div>} />
          <Route path="admin/settings" element={<div>Settings</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
