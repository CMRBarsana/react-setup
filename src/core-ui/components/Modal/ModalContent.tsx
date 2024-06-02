import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const ModalContent = ({ children }: Props) => {
  return <div className="p-4">{children}</div>;
};
