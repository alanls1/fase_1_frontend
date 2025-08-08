/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Input from "../input/Input";
import "./Form.scss";

interface propTextField {
  label: string;
  name: string;
  max: number;
  min: number;
  placeholder: string;
}

interface values {
  busto: number;
  torax: number;
  cintura: number;
  quadril: number;
  coxa: number;
  calcado: number;
}

const Form = () => {
  const [value, setValue] = useState<values>({
    busto: 0,
    torax: 0,
    cintura: 0,
    quadril: 0,
    coxa: 0,
    calcado: 0,
  });

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
          max={max}
          min={min}
          title={`Insira valores entre ${min} e ${max} cm`}
          step="0.1"
          placeholder={placeholder}
        />
      </div>
    );
  };
  console.log(value);

  const handleChange = (e: number, field: keyof values) => {
    setValue((prev) => ({ ...prev, [field]: e }));
  };
  return (
    <form className="acc-form-container">
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
        max: 0,
        min: 50,
        placeholder: "Ex: 39.0 ",
      })}
    </form>
  );
};

export default Form;
