import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ModalFooter = ({ children }: Props) => {
  return <div className="rounded-b-md bg-gray-muted px-4 py-2">{children}</div>;
};
