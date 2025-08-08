import Form, { type valuesInput } from "../../components/form/Form";
import SectionLeft from "../../components/sectionLeft/SectionLeft";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const values = (e: valuesInput) => {
    console.log("E: ", e);
  };
  return (
    <div className="register-container">
      <div className="section-form">
        <SectionLeft />
        <div className="section-right">
          <h2>Crie sua conta</h2>
          <Form isLogin={false} labelButton="Entrar" handleSubmit={values} />
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
