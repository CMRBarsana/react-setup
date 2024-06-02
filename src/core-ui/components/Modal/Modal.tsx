import { ReactNode } from 'react';

import clsx from 'clsx';

import './_modal.scss';
import ModalOverlay from './components/ModalOverlay';
import { ModalSizeType } from './models';
import { returnSizeClass } from './services';

interface ModalProps {
  children: ReactNode;
  size: ModalSizeType;
}

export const Modal = ({ children, size }: ModalProps) => {
  return (
    <>
      <ModalOverlay />
      <div className={clsx(returnSizeClass(size), 'ds-modal-card')}>{children}</div>
    </>
  );
};
