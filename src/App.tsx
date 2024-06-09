import { NavLink, Route, Routes } from 'react-router-dom';

import { Button, Toast } from 'core-ui';

import ComponentSamples from 'modules/samples/components/ComponentSamples';
import Customers from 'modules/samples/routes/Customers';
import RouteSample from 'modules/samples/routes/RouteSample';
import TailwindSample from 'modules/samples/tailwind/TailwindSample';
import ReactHooks from 'modules/tutorial/hooks/HooksSamples';

function App() {
  const list = [
    { path: '/tailwind', name: 'Tailwind', content: <TailwindSample /> },
    { path: '/components', name: 'Components', content: <ComponentSamples /> },

    // FOR REMOVAL
    { path: '/route', name: 'Route', content: <RouteSample /> },
    {
      path: '/react-hooks',
      name: 'React Hooks',
      content: <ReactHooks />,
    },
  ];

  return (
    <>
      <div className="flex h-screen w-full gap-2 overflow-hidden p-3">
        <div className="w-40 flex-none space-y-2">
          {list.map((item) => (
            <div key={item.name} className="w-full">
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {({ isActive }) => (
                  <Button solid primary={!isActive} secondary={isActive} className="w-full">
                    {item.name}
                  </Button>
                )}
              </NavLink>
            </div>
          ))}
          <NavLink to="customers">
            {({ isActive }) => (
              <Button solid primary={!isActive} secondary={isActive} className="w-full">
                Dynamic
              </Button>
            )}
          </NavLink>
        </div>
        <div className="h-full flex-1 overflow-y-scroll rounded-md border-2 border-solid border-primary p-3">
          <Routes>
            {list.map((item) => (
              <Route key={item.name} path={`${item.path}/*`} element={item.content} />
            ))}
            <Route path="customers/:id?/sample/:userId?" element={<Customers />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </div>
      <Toast />
    </>
  );
}

export default App;
