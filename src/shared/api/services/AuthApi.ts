import { AuthEmailDto, AuthUsernameDto, ViewerDto } from "@shared/api";


export const AuthApi = {
  authByEmail: async (data: AuthEmailDto): Promise<ViewerDto> => {
    const result = await new Promise((resolve) => setTimeout(() => resolve("resolve"), 1000));
    console.log(result);
    console.log(data);
    return {
      username: "username",
      email: "email"
    };
  },
  authByUsername: async (data: AuthUsernameDto): Promise<ViewerDto> => {
    console.log(data);
    return {
      username: "username",
      email: "email"
    };
  }
};
