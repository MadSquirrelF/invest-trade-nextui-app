"use client";

/* eslint-disable jsx-a11y/no-autofocus */
import { Divider } from "@nextui-org/divider";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import React, { memo } from "react";

import LoginForm from "./LoginForm";

import { VkIcon, YandexIcon } from "@/components/icons";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const LoginModal = memo((props: LoginModalProps) => {
  const { isOpen, onOpenChange } = props;

  return (
    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold text-2xl">Вход на сайт</p>
                <p className="text-default-600 text-sm">
                  Для того, чтобы перейти к личным данным нужно войти
                </p>
              </div>

              <div className="flex flex-col gap-y-2">
                <button
                  className="flex min-h-11 rounded-lg bg-[#07f] gap-x-4 hover:opacity-80 text-base active:opacity-70 py-2 px-3 flex-row text-white font-medium w-full items-center justify-center bg-primary"
                  type="button"
                >
                  <VkIcon size={28} />
                  Войти через VK ID
                </button>
                <button
                  className="flex min-h-11 rounded-lg text-white gap-x-4 text-base flex-row hover:opacity-90 active:opacity-80 py-2 px-3 font-medium w-full items-center justify-center bg-black"
                  type="button"
                >
                  <YandexIcon size={28} />
                  Войти через Яндекс ID
                </button>
              </div>

              <Divider className="my-1" />
            </ModalHeader>

            <ModalBody>
              <LoginForm />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
});

export default LoginModal;
