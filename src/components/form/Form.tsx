import { useState } from "react";
import Button from "../button/Button";
import "./Form.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface prop {
  isLogin: boolean;
  labelButton: string;
}

const Form = ({ isLogin, labelButton }: prop) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  return (
    <form className="form-container">
      {!isLogin && (
        <>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Alan Lima"
          />
        </>
      )}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required={true}
        placeholder="exemplo@email.com"
      />
      <label htmlFor="password">Senha</label>
      <div className="input-password">
        <input
          type={isVisible ? "text" : "password"}
          name="password"
          required={true}
          placeholder={isLogin ? "••••••••" : "Mínimo de 8 caracteres"}
        />
        <Button variant="outlined" onClick={toggleVisible} type={"button"}>
          {isVisible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </Button>
      </div>
      {!isLogin && <small>A senha deve ter pelo menos 8 caracteres</small>}
      <div className="button-save">
        <Button type={"button"} variant="contained">
          {labelButton}
        </Button>
      </div>
    </form>
  );
};

export default Form;
