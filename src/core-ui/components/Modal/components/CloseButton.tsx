import { FaTimes } from 'react-icons/fa';

interface Props {
  onClose: () => void;
}

function CloseButton({ onClose }: Props) {
  return (
    <button
      type="button"
      className="flex h-full border-none bg-transparent text-white opacity-80 hover:cursor-pointer"
      onClick={onClose}
    >
      <FaTimes className="my-auto text-md" />
    </button>
  );
}

export default CloseButton;
