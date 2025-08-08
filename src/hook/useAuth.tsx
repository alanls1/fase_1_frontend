import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { IUser } from "../types/login";

const AuthContext = createContext<IUser | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>({
    accessToken: "",
    refreshToken: "",
    email: "",
    name: "",
    uid_usuarios: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const uid_usuarios = localStorage.getItem("uid_usuarios");

    if (accessToken && refreshToken && email && name && uid_usuarios) {
      setUser({
        accessToken,
        refreshToken,
        email,
        name,
        uid_usuarios,
      });
    }
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return value;
};
