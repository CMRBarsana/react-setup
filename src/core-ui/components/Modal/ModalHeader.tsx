import { ReactNode } from 'react';

import clsx from 'clsx';

import CloseButton from './components/CloseButton';
import { ModalHeaderType } from './models';

interface Props {
  children: ReactNode;
  onClose?: () => void;
  theme?: ModalHeaderType;
}

export const ModalHeader = ({ children, onClose, theme }: Props) => {
  const returnHeaderTheme = () => {
    switch (theme) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'info':
        return 'bg-info';
      case 'success':
        return 'bg-success';
      case 'danger':
        return 'bg-danger';
      case 'warning':
        return 'bg-warning';
      default:
        return 'bg-primary';
    }
  };
  return (
    <div className={clsx(returnHeaderTheme(), 'flex rounded-t-md  p-4')}>
      <div className="flex-1 font-medium text-white">{children}</div>
      {onClose && (
        <div className="flex-none">
          <CloseButton onClose={onClose} />
        </div>
      )}
    </div>
  );
};

ModalHeader.defaultProps = {
  theme: 'primary',
};
