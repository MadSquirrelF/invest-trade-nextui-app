import { __API__ } from "@/constants/constants";

export const API_URL = `${__API__}/api`;

export const getNewUrl = (value: string) => `/news/${value}`;
