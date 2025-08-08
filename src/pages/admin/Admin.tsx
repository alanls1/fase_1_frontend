import { Outlet } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useEffect, useState } from "react";

const Admin = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accessToken !== "") {
      // Verifica se o valor foi apenas carregado
      if (!accessToken) {
        window.location.href = "/";
      }
      setLoading(false);
    }
  }, [accessToken]);
  if (loading) return null;
  return <Outlet />;
};

export default Admin;
