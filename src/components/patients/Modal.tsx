import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      className={`fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-50 bg-gray-900 rounded-lg transition delay-100 duration-300 ease-in-out`}
    >
      <Card
        onKeyUp={onKeyDown}
        className={`max-w-lg rounded-lg transition delay-100 duration-300 ease-in-out`}
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="mt-2 scroll-m-20 text-2xl font-bold tracking-tight text-center">
            {title}
          </h2>
          <Button onClick={onClose}>X</Button>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </dialog>
  );
};

export default Modal;
