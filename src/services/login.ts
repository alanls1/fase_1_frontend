/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from ".";
import type { IValuesInput } from "../types/login";

export const login = async ({ email, password }: IValuesInput) => {
  try {
    const res = await api.post("/users/login", {
      email,
      password,
    });

    if (res.data) {
      const {
        accessToken,
        refreshToken,
        user: { email, name, uid_usuarios },
      } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("uid_usuarios", uid_usuarios);
    }

    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const logout = async () => {
  try {
    const res = await api.post("/users/logout");

    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
