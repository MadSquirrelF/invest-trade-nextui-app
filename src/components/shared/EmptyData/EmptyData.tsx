import React from "react";

import { SadSmileIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";

const EmptyData = () => {
  return (
    <div className="w-full h-96 flex flex-row justify-center gap-x-6 items-center">
      <SadSmileIcon className="text-danger" size={100} />
      <div className="flex flex-col gap-y-3">
        <h3
          className={title({
            bold: "bold",
            size: "md",
          })}
        >
          No results found
        </h3>
        <p
          className={subtitle({
            align: "center",
          })}
        >
          We could not find what you searched for. Try searching again...
        </p>
      </div>
    </div>
  );
};

export default EmptyData;
