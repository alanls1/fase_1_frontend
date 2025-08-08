import { useState, type FormEvent } from "react";
import Button from "../button/Button";
import "./Form.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import type { IValuesInput } from "../../types/login";
import Input from "../input/Input";

interface prop {
  isLogin: boolean;
  labelButton: string;
  handleSubmit: (e: IValuesInput) => void;
}

const Form = ({ isLogin, labelButton, handleSubmit }: prop) => {
  const [values, setValues] = useState<IValuesInput>({
    name: "",
    email: "",
    password: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  const handleChange = (e: string, field: string) =>
    setValues((prev) => ({ ...prev, [field]: e }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(values);
  };

  return (
    <form className="form-container" onSubmit={submit}>
      {!isLogin && (
        <>
          <label htmlFor="name">Nome completo</label>
          <Input
            type="text"
            name="name"
            required={true}
            placeholder="Alan Lima"
            value={values.name}
            onChange={(e) => handleChange(e.target.value, "name")}
          />
        </>
      )}
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        name="email"
        required={true}
        placeholder="exemplo@email.com"
        value={values.email}
        onChange={(e) => handleChange(e.target.value, "email")}
      />
      <label htmlFor="password">Senha</label>
      <div className="input-password">
        <Input
          type={isVisible ? "text" : "password"}
          name="password"
          required={true}
          placeholder={isLogin ? "••••••••" : "Mínimo de 8 caracteres"}
          value={values.password}
          onChange={(e) => handleChange(e.target.value, "password")}
        />
        <Button variant="outlined" onClick={toggleVisible} type={"button"}>
          {isVisible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </Button>
      </div>
      {!isLogin && <small>A senha deve ter pelo menos 8 caracteres</small>}
      <div className="button-save">
        <Button type={"submit"} variant="contained">
          {labelButton}
        </Button>
      </div>
    </form>
  );
};

export default Form;
