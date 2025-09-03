/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SectionLeft from "../../components/sectionLeft/SectionLeft";
import "./Register.scss";
import { Link } from "react-router-dom";
import type { IValuesInput } from "../../types/login";
import useFeedback from "../../hook/useFeedback";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/register";
import Form from "../../components/form/Form";

const Register = () => {
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const [isSubmit, setIsSubmit] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: IValuesInput) => {
      const res = await register(data);
      return res;
    },
    onSuccess: () => {
      setMessage("Cadastro realizado com sucesso");
      setIsVisible(true);
      window.location.href = "/";
      toggleSubmit();
    },
    onError: (error: any) => {
      setMessage(error);
      setIsVisible(true);
      toggleSubmit();
    },
  });

  const values = (e: IValuesInput) => {
    setIsSubmit(true);
    mutate(e);
  };

  const toggleSubmit = () => setIsSubmit(false);

  return (
    <div className="register-container">
      <div className="section-form">
        <SectionLeft />
        <div className="section-right">
          <h2>Crie sua conta</h2>
          <Form
            isLogin={false}
            labelButton="Entrar"
            handleSubmit={values}
            isSubmit={isSubmit}
          />
          <div className="policy">
            <small>
              Ao se cadastrar, você concorda com nossos Termos de Serviço e
              Política de Privacidade
            </small>
          </div>
          <div>
            <p>Já possui uma conta?</p>
            <Link to={"/"}>Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
