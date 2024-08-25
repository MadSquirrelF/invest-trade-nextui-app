import { User } from "./user.interface";

export enum NewBlockType {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface NewBlockBase {
  _id: string;
  type: NewBlockType;
}

export interface NewImageBlock extends NewBlockBase {
  type: NewBlockType.IMAGE;
  src: string;
  title: string;
}

export interface NewTextBlock extends NewBlockBase {
  type: NewBlockType.TEXT;
  blockTitle?: string;
  paragraphs: string[];
}
export type NewBlock = NewImageBlock | NewTextBlock;

export interface INew {
  _id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  author: Pick<User, "username" | "avatarPath">;
  views: number;
  poster: string;
  createdAt: string;
  info: NewBlock[];
}

export interface INewResponse {
  data: INew[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}
