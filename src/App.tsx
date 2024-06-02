import { NavLink, Route, Routes } from 'react-router-dom';

import { Button, Toast } from 'core-ui';

import Customers from 'modules/Customers';
import ComponentSamples from 'modules/samples/components/ComponentSamples';
import TailwindSample from 'modules/samples/tailwind/TailwindSample';
import ReactHooks from 'modules/tutorial/hooks/HooksSamples';
import HookSamples from 'modules/tutorial/HookSamples';

function App() {
  const list = [
    { path: '/tailwind', name: 'Tailwind', content: <TailwindSample /> },
    { path: '/components', name: 'Components', content: <ComponentSamples /> },

    // FOR REMOVAL
    { path: '/route', name: 'Route', content: <Customers /> },
    { path: '/samples', name: 'Samples', content: <HookSamples /> },
    { path: '/react-hooks', name: 'React Hooks', content: <ReactHooks /> },
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
        </div>
        <div className="h-full flex-1 overflow-y-scroll rounded-md border-2 border-solid border-primary p-3">
          <Routes>
            {list.map((item) => (
              <Route key={item.name} path={`${item.path}/*`} element={item.content} />
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
