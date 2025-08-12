/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_API,
  withCredentials: true,
});

export const base = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_API,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
});

base.interceptors.response.use(
  (response) => response,
  (error: any) => {
    if (error?.response?.data?.message == "Token inválido ou expirado") {
      refreshToken();
    }

    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const res = await api.post("/users/refreshToken", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    if (res.data) {
      const { accessToken } = res.data;

      localStorage.setItem("accessToken", accessToken);
    }
    return;
  } catch {
    if (
      confirm(
        "Não foi possível renovar sua sessão. Por favor faça login novamente"
      )
    ) {
      window.location.href = "/";
      localStorage.clear();
    }
  }
};
