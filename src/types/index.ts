import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export enum SortVariants {
  TITLE = "title",
  CREATEDAT = "createdAt",
  VIEW = 'view',
}
