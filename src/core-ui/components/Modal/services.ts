import { ModalSizeType } from './models';

export const returnSizeClass = (size: ModalSizeType) => {
  switch (size) {
    case 'sm':
      return 'ds-modal-size-sm';
    case 'md':
      return 'ds-modal-size-md';
    case 'lg':
      return 'ds-modal-size-lg';
    case 'xl':
      return 'ds-modal-size-xl';
  }
};
