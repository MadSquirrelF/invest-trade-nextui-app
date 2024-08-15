"use client";

import { Input } from "@nextui-org/input";
import React, { memo, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

import { EyeClosedIcon, EyeOpenedIcon, LockIcon } from "@/components/icons";

interface IPasswordInput {
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  name: string;
  isPasswordRequired?: boolean;
}

const PasswordInput = memo((props: IPasswordInput) => {
  const { register, name, error, isPasswordRequired } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired
      {...register(
        name,
        isPasswordRequired
          ? {
              required: `Введите пароль`,
              minLength: {
                value: 8,
                message: `Пароль должен быть мин. 8 символов!`,
              },
            }
          : {},
      )}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeOpenedIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      errorMessage={error?.message}
      isInvalid={error ? true : false}
      label="Пароль"
      labelPlacement="outside"
      placeholder="Введите пароль"
      size="lg"
      startContent={
        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      type={isVisible ? "text" : "password"}
      variant="flat"
    />
  );
});

export default PasswordInput;
