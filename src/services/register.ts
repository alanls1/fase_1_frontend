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

    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
