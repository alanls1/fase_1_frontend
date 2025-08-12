/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "../input/Input";
import "./Form.scss";
import Button from "../button/Button";
import useForm from "./logicForm";

interface propTextField {
  name: string;
  max?: number;
  min?: number;
  placeholder: string;
}

export interface values {
  busto?: number;
  torax?: number;
  cintura?: number;
  quadril?: number;
  coxa?: number;
  calcado?: number;
}
const Form = () => {
  const { handleChange, submit, value } = useForm();
  const textField = ({ name, max, min, placeholder }: propTextField) => {
    return (
      <div>
        <Input
          name={name}
          type="number"
          onChange={(e) =>
            handleChange(e.target.value as any as number, name as keyof values)
          }
          value={
            value[name as keyof values] == 0 ? "" : value[name as keyof values]
          }
          max={max}
          min={min}
          title={`Insira valores entre ${min} e ${max} cm`}
          step="0.1"
          placeholder={placeholder}
          required={true}
        />
      </div>
    );
  };

  return (
    <form className="form-metrics-container" onSubmit={submit}>
      {textField({
        name: "busto",
        max: 150,
        min: 50,
        placeholder: "Busto Ex: 87.5 ",
      })}
      {textField({
        name: "torax",
        max: 150,
        min: 50,
        placeholder: "Toráx Ex: 50.0 ",
      })}
      {textField({
        name: "cintura",
        max: 120,
        min: 40,
        placeholder: "Cintura Ex: 70.0 ",
      })}
      {textField({
        name: "quadril",
        max: 150,
        min: 50,
        placeholder: "Quadril Ex: 60.0 ",
      })}
      {textField({
        name: "coxa",
        max: 90,
        min: 30,
        placeholder: "Coxa Ex: 30.1 ",
      })}
      {textField({
        name: "calcado",
        placeholder: "Calçado Ex: 39.0 ",
      })}
      <Button variant="contained" type="submit" title="Salvar medidas">
        Salvar
      </Button>
    </form>
  );
};

export default Form;
