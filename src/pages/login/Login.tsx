/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "../../components/form/Form";
import "./Login.scss";
import { Link } from "react-router-dom";
import SectionLeft from "../../components/sectionLeft/SectionLeft";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/login";
import type { IValuesInput } from "../../types/login";
import Feedback from "../../components/feedback/Feedback";
import useFeedback from "../../hook/useFeedback";
import { useState } from "react";

const Login = () => {
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const [isSubmit, setIsSubmit] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: IValuesInput) => {
      const res = await login(data);
      return res;
    },
    onSuccess: () => {
      setMessage("Login realizado com sucesso");
      setIsVisible(true);
      window.location.href = "/admin/";
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
    <div className="login-container">
      <div className="section-form">
        <SectionLeft />
        <div className="section-right">
          <h2>Bem-vindo de volta!</h2>
          <Form
            isLogin={true}
            labelButton="Entrar"
            handleSubmit={values}
            isSubmit={isSubmit}
          />
          <div>
            <p>Ainda não tem uma conta?</p>
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </div>
      </div>
      <Feedback />
    </div>
  );
};

export default Login;
