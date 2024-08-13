import React from "react";

import { NoConnectionIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";

interface NoConnectionProps {
  error: string;
}

const NoConnection = (props: NoConnectionProps) => {
  const { error } = props;

  return (
    <div className="w-full h-96 flex flex-row justify-center gap-x-6 items-center">
      <NoConnectionIcon className="text-danger" size={100} />
      <div className="flex flex-col gap-y-3">
        <h3
          className={title({
            bold: "bold",
            size: "md",
          })}
        >
          {error}
        </h3>
        <p
          className={subtitle({
            align: "center",
          })}
        >
          We&apos;ve lost our connection to the internet. Please check your
          network settings and try again. If the problem persists, please
          refresh the page or contact support
        </p>
      </div>
    </div>
  );
};

export default NoConnection;
