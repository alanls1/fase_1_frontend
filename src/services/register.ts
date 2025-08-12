/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from ".";
import type { IValuesInput } from "../types/login";

export const register = async ({ email, password, name }: IValuesInput) => {
  try {
    const res = await api.post("/users", {
      email,
      password,
      name,
    });

    if (res.data) {
      const {
        accessToken,
        refreshToken,
        user: { email, name, uid_usuario },
      } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("uid_usuarios", uid_usuario);
    }

    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
