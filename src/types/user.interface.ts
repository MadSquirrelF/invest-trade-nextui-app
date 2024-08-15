export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  _id: string;
  email: string;
  username: string;
  description: string;
  avatar: string;
  roles: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface FeatureFlags {
  isProductRatingEnabled?: boolean;
  isCounterEnabled?: boolean;
}

export interface JsonSettings {
  theme?: "dark" | "light";

  isFirstVisit?: boolean;

  isProductPageWasOpened?: boolean;
}
