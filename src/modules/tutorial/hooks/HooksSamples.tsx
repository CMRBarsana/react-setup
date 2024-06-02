import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { Button } from 'core-ui';

import UseCallback from './UseCallback';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseState from './UseState';

function ReactHooks() {
  const list = [
    { path: 'use-state', name: 'useState', element: <UseState /> },
    { path: 'use-effect', name: 'useEffect', element: <UseEffect /> },
    { path: 'use-memo', name: 'useMemo', element: <UseMemo /> },
    { path: 'use-callback', name: 'useCallback', element: <UseCallback /> },
    { path: 'use-ref', name: 'useRef', element: <UseRef /> },
  ];

  return (
    <div>
      {list.map((item) => (
        <NavLink key={item.name} to={item.path} className="mr-2">
          {({ isActive }) => (
            <Button solid primary={!isActive} secondary={isActive}>
              {item.name}
            </Button>
          )}
        </NavLink>
      ))}
      <div className="mt-4">
        <Routes>
          {list.map((item) => (
            <Route key={item.name} path={`${item.path}/*`} element={item.element} />
          ))}
          <Route path="*" element={<Navigate to="use-state" />} />
        </Routes>
      </div>
    </div>
  );
}

export default ReactHooks;
