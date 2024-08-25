import axiosWithAuth from "@/api/interceptors";
import { API_URL } from "@/config/api.config";
import { User } from "@/types/user.interface";

class UserService {
  async getProfileMiddleware(refreshToken: string) {
    const { data: profile } = await axiosWithAuth.get<User>(
      API_URL.users("/profile"),
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );

    return profile;
  }
}

export default new UserService();
