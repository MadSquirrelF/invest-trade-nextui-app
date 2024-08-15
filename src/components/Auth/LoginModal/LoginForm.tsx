"use client";

/* eslint-disable jsx-a11y/no-autofocus */
import { Input } from "@nextui-org/input";
import React, { memo } from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";

import { MailIcon } from "@/components/icons";
import PasswordInput from "@/components/shared/PassordInput/PasswordInput";
import { ILogin } from "@/types/auth.interface";
import { validEmail } from "@/constants/constants";

const LoginForm = memo(() => {
  const { register, handleSubmit, formState, reset } = useForm<ILogin>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log("Login data:", data);
    reset();
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-6">
        <Input
          {...register(`email`, {
            required: "Введите почту",
            pattern: {
              value: validEmail,
              message: "Введите корректный адрес электронной почты",
            },
          })}
          autoFocus
          isRequired
          errorMessage={formState.errors.email?.message}
          isInvalid={formState.errors.email ? true : false}
          label="Почта"
          labelPlacement="outside"
          placeholder="Введите почту"
          size="lg"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="email"
          variant="flat"
        />
        <PasswordInput
          isPasswordRequired
          error={formState.errors.password}
          name={"password"}
          register={register}
        />
      </div>

      <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Запомнить меня
        </Checkbox>
        <Link className="font-semibold" color="primary" href="#" size="md">
          Забыли пароль?
        </Link>
      </div>

      <div className="w-full flex flex-col gap-2">
        <Button className="font-bold" color="primary" size="lg" type="submit">
          Войти
        </Button>
        <div className="flex flex-row w-full gap-x-2 items-center justify-center">
          <p>Еще нет аккаунта?</p>
          <Link className="font-semibold" color="primary" href="#" size="md">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </form>
  );
});

export default LoginForm;
