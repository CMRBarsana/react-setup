import { useState } from 'react';

import { ModalHeaderType, ModalSizeType } from 'core-ui/components/Modal/models';

import { Button, Modal, ModalContent, ModalFooter, ModalHeader } from 'core-ui';

function ModalSamples() {
  const [open, setOpen] = useState(false);
  const [currentSize, setCurrentSize] = useState<ModalSizeType>('sm');
  const [currentTheme, setCurrentTheme] = useState<ModalHeaderType>('primary');

  const handleToggle = (size?: ModalSizeType, theme?: ModalHeaderType) => {
    if (size) setCurrentSize(size);
    if (theme) setCurrentTheme(theme);
    setOpen((currState) => !currState);
  };

  const modal = () => (
    <Modal size={currentSize}>
      <ModalHeader theme={currentTheme} onClose={handleToggle}>
        Modal Header
      </ModalHeader>
      <ModalContent>Modal Content</ModalContent>
      <ModalFooter>
        <div className="flex w-full">
          <Button
            outline
            {...{ [currentTheme]: true }}
            onClick={handleToggle}
            className="ml-auto mr-2"
          >
            Close
          </Button>
          <Button solid {...{ [currentTheme]: true }} onClick={handleToggle}>
            Submit
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );

  return (
    <>
      <div className="mb-4 space-x-2">
        <Button solid primary onClick={() => handleToggle('sm')}>
          Small Modal
        </Button>
        <Button solid primary onClick={() => handleToggle('md')}>
          Medium Modal
        </Button>
        <Button solid primary onClick={() => handleToggle('lg')}>
          Large Modal
        </Button>
        <Button solid primary onClick={() => handleToggle('xl')}>
          XL Modal
        </Button>
      </div>
      <div className="space-x-2">
        <Button solid primary onClick={() => handleToggle('sm', 'primary')}>
          Primary Modal
        </Button>
        <Button solid secondary onClick={() => handleToggle('sm', 'secondary')}>
          Secondary Modal
        </Button>
        <Button solid info onClick={() => handleToggle('sm', 'info')}>
          Info Modal
        </Button>
        <Button solid success onClick={() => handleToggle('sm', 'success')}>
          Success Modal
        </Button>
        <Button solid danger onClick={() => handleToggle('sm', 'danger')}>
          Danger Modal
        </Button>
        <Button solid warning onClick={() => handleToggle('sm', 'warning')}>
          Warning Modal
        </Button>
      </div>
      {open && modal()}
    </>
  );
}

export default ModalSamples;
