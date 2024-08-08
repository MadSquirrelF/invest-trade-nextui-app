/* eslint-disable jsx-a11y/media-has-caption */
"use client";

/* eslint-disable jsx-a11y/no-autofocus */
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { useState } from "react";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import {
  EyeClosedIcon,
  EyeOpenedIcon,
  HeartFilledIcon,
  HomeIcon,
  LockIcon,
  MailIcon,
  SignInIcon,
  UserIcon,
  VkAuthIcon,
  YandexIcon,
} from "@/components/icons";
import { subtitle, title } from "@/components/primitives";

export default function SignUpPage() {
  const t = useTranslations("Index");

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      startContent: <HomeIcon size={20} />,
      text: t("breadcrumbs.Main page"),
      href: "/",
    },
    {
      startContent: <SignInIcon size={20} />,
      text: t("breadcrumbs.Sign up"),
      href: "/signup",
    },
  ];

  return (
    <>
      <BreadcrumbsClient items={breadcrumbs} size="lg" />

      <div className="flex flex-row gap-x-3 h-full w-full">
        <Card className="h-full w-1/2 py-20 px-24">
          <CardBody className="items-center gap-y-10">
            <Chip
              color="danger"
              startContent={<HeartFilledIcon />}
              variant="faded"
            >
              Create your dream with us
            </Chip>

            <div className="flex flex-col w-full gap-y-4 items-center justify-center">
              <h2 className={title()}>Sign up account</h2>
              <p
                className={subtitle({
                  size: "sm",
                  fullWidth: true,
                  align: "center",
                })}
              >
                Enter your personal data to create an account
              </p>
            </div>

            <div className="flex flex-row gap-x-4 items-center justify-center">
              <Button isIconOnly size="lg" variant="faded">
                <VkAuthIcon color="#07f" size={30} />
              </Button>
              <Button isIconOnly size="lg" variant="faded">
                <YandexIcon size={30} />
              </Button>
            </div>

            <Divider />

            <form className="flex flex-col gap-y-20 w-full">
              <div className="flex flex-col gap-y-5 w-full">
                <Input
                  autoFocus
                  isRequired
                  labelPlacement="outside"
                  placeholder="Enter username"
                  size="lg"
                  startContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  type="email"
                  variant="flat"
                />
                <Input
                  isRequired
                  labelPlacement="outside"
                  placeholder="Enter email"
                  size="lg"
                  startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  type="email"
                  variant="flat"
                />
                <Input
                  isRequired
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
                  labelPlacement="outside"
                  placeholder="Enter password"
                  size="lg"
                  startContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  type={isVisible ? "text" : "password"}
                  variant="flat"
                />
              </div>

              <div className="flex flex-col gap-y-5 w-full">
                <Button color="primary" size="lg">
                  Sign Up
                </Button>

                <div className="flex flex-row w-full gap-x-4 items-center justify-center">
                  <p>Already have an account?</p>
                  <Button size="sm" variant="faded">
                    Sign In
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
        <Card className="flex-grow w-full relative p-0">
          <CardBody className="p-0 relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover z-[1]"
            >
              <source src="/test2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-default grid z-10 grid-cols-3 gap-3 mix-blend-screen">
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
              <div className="bg-black rounded-md" />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
