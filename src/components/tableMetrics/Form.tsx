/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "../input/Input";
import "./Form.scss";
import Button from "../button/Button";
import useForm from "./logicForm";
import { useEffect, type Dispatch, type SetStateAction } from "react";

interface propTextField {
  label: string;
  name: string;
  max?: number;
  min?: number;
  placeholder: string;
}

export interface values {
  busto: number;
  torax: number;
  cintura: number;
  quadril: number;
  coxa: number;
  calcado: number;
  uid_medidas?: string;
}

type prop = values & {
  setEdit: Dispatch<SetStateAction<boolean>>;
};

const Form = ({
  busto,
  calcado,
  cintura,
  coxa,
  quadril,
  setEdit,
  torax,
  uid_medidas,
}: prop) => {
  const { handleChange, submit, value, setValue } = useForm();

  const textField = ({ label, name, max, min, placeholder }: propTextField) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <Input
          name={name}
          type="number"
          onChange={(e) =>
            handleChange(e.target.value as any as number, name as keyof values)
          }
          value={value[name as keyof values]}
          max={max}
          min={min}
          title={`Insira valores entre ${min} e ${max} cm`}
          step="0.1"
          placeholder={placeholder}
        />
      </div>
    );
  };

  useEffect(() => {
    setValue({
      busto,
      calcado,
      cintura,
      coxa,
      quadril,
      torax,
      uid_medidas,
    });
  }, [busto, calcado, cintura, coxa, quadril, torax]);

  return (
    <form className="acc-form-container" onSubmit={submit}>
      {textField({
        label: "Busto:",
        name: "busto",
        max: 150,
        min: 50,
        placeholder: "Ex: 87.5 ",
      })}
      {textField({
        label: "tórax:",
        name: "torax",
        max: 150,
        min: 50,
        placeholder: "Ex: 50.0 ",
      })}
      {textField({
        label: "Cintura:",
        name: "cintura",
        max: 120,
        min: 40,
        placeholder: "Ex: 70.0 ",
      })}
      {textField({
        label: "Quadril:",
        name: "quadril",
        max: 150,
        min: 50,
        placeholder: "Ex: 60.0 ",
      })}
      {textField({
        label: "Coxa:",
        name: "coxa",
        max: 90,
        min: 30,
        placeholder: "Ex: 30.1 ",
      })}
      {textField({
        label: "Número de calçado:",
        name: "calcado",

        placeholder: "Ex: 39.0 ",
      })}
      <div className="buttons">
        <Button variant="contained" type="submit">
          Salvar
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => setEdit(false)}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default Form;
