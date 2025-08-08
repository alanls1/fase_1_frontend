/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "../../components/form/Form";
import "./Login.scss";
import { Link } from "react-router-dom";
import SectionLeft from "../../components/sectionLeft/SectionLeft";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/login";
import type { IValuesInput } from "../../types/login";
import { useState } from "react";
import Feedback from "../../components/feedback/Feedback";

const Login = () => {
  const [open, setOpen] = useState<{
    isVisible: boolean;
    message: string;
  }>({ isVisible: false, message: "" });

  const { mutate } = useMutation({
    mutationFn: async (data: IValuesInput) => {
      const res = await login(data);
      return res;
    },
    onSuccess: () => {
      window.location.href = "/admin/";
    },
    onError: (error: any) => {
      console.log("error: ", error);
      setOpen({ isVisible: true, message: error });
    },
  });

  const values = (e: IValuesInput) => {
    mutate(e);
  };

  return (
    <div className="login-container">
      <div className="section-form">
        <SectionLeft />
        <div className="section-right">
          <h2>Bem-vindo de volta!</h2>
          <Form isLogin={true} labelButton="Entrar" handleSubmit={values} />
          <div>
            <p>Ainda não tem uma conta?</p>
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </div>
      </div>
      <Feedback open={open} setOpen={setOpen} />
    </div>
  );
};

export default Login;
