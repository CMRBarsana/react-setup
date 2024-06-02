import { FaTimes } from 'react-icons/fa';

import './_toast.scss';

interface Props {
  closeToast: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function CloseButton({ closeToast }: Props) {
  return (
    <button type="button" className="toast-close" onClick={closeToast}>
      <FaTimes />
    </button>
  );
}

export default CloseButton;
