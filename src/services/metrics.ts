/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from ".";

export const metrics = async (uid_usuarios: string) => {
  try {
    const res = await api.get("/metrics", { params: { uid_usuarios } });
    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
