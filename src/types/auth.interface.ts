import { User } from "./user.interface";

export interface ILogin {
  email: string;
  password: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: User;
}
