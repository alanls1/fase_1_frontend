import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../hook/useAuth";
import Button from "../button/Button";
import "./Header.scss";
import { logout } from "../../services/login";

const Header = () => {
  const { name } = useAuth();
  const { mutate } = useMutation({
    mutationFn: async () => {
      await logout();
    },
    onSuccess: () => {
      localStorage.clear();
      window.location.href = "/";
    },
  });

  const handleLogout = () => mutate();
  return (
    <header className="header-container">
      <nav>
        <h1>Olá, {name}</h1>
        <Button type="button" variant="outlined" onClick={handleLogout}>
          Sair
        </Button>
      </nav>
    </header>
  );
};

export default Header;
