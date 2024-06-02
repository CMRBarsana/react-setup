import { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Button } from 'core-ui';

import ButtonSamples from './ButtonSamples';
import IconButtonSamples from './IconButtonSamples';
import ModalSamples from './ModalSamples';
import ToastSamples from './ToastSamples';

function ComponentSamples() {
  const [display, setDisplay] = useState(4);

  const list = [
    { id: 1, name: 'Button', content: <ButtonSamples /> },
    { id: 2, name: 'Icon Button', content: <IconButtonSamples /> },
    { id: 3, name: 'Toast', content: <ToastSamples /> },
    { id: 4, name: 'Modal', content: <ModalSamples /> },
  ];

  return (
    <div className="flex gap-2">
      <Routes>
        <Route path="sample-1" element={<div>sample 1</div>} />
        <Route path="sample-2" element={<div>sample 2</div>} />
      </Routes>
      {/* <div className="w-40 flex-none space-y-2">
        {list.map((item) => (
          <Button
            onClick={() => setDisplay(item.id)}
            solid
            primary={display !== item.id}
            secondary={display === item.id}
            className="w-full"
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="h-full flex-1 overflow-y-scroll rounded-md border-2 border-solid border-primary p-3">
        {list.find((item) => display === item.id)?.content}
      </div> */}
    </div>
  );
}

export default ComponentSamples;
