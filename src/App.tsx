import { NavLink, Route, Routes } from 'react-router-dom';

import { Button, Toast } from 'core-ui';

import Customers from 'modules/Customers';
import ComponentSamples from 'modules/samples/components/ComponentSamples';
import TailwindSample from 'modules/samples/tailwind/TailwindSample';
import HookSamples from 'modules/tutorial/HookSamples';
import ReactHooks from 'modules/tutorial/ReactHooks';

function App() {
  const list = [
    { id: 1, path: '/tailwind', name: 'Tailwind', content: <TailwindSample /> },
    { id: 2, path: '/components', name: 'Components', content: <ComponentSamples /> },

    // FOR REMOVAL
    { id: 3, path: '/route', name: 'Route', content: <Customers /> },
    { id: 4, path: '/samples', name: 'Samples', content: <HookSamples /> },
    { id: 5, path: '/react-hooks', name: 'React Hooks', content: <ReactHooks /> },
  ];

  return (
    <>
      <div className="flex h-screen w-full gap-2 overflow-hidden p-3">
        <div className="w-40 flex-none space-y-2">
          {list.map((item) => (
            <div key={item.id} className="w-full">
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
        </div>
        <div className="h-full flex-1 overflow-y-scroll rounded-md border-2 border-solid border-primary p-3">
          <Routes>
            {list.map((item) => (
              <Route path={`${item.path}/*`} element={item.content} />
            ))}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </div>
      <Toast />
    </>
  );
}

export default App;
