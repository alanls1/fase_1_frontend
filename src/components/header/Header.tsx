import { useAuth } from "../../hook/useAuth";
import Button from "../button/Button";
import "./Header.scss";

const Header = () => {
  const { name } = useAuth();

  return (
    <header className="header-container">
      <nav>
        <h1>Olá, {name}</h1>
        <Button type="button" variant="outlined">
          Sair
        </Button>
      </nav>
    </header>
  );
};

export default Header;
