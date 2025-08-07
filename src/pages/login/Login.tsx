import Form from "../../components/form/Form";
import "./Login.scss";
import { Link } from "react-router-dom";
import SectionLeft from "../../components/sectionLeft/SectionLeft";

const Login = () => {
  return (
    <div className="login-container">
      <div className="section-form">
        <SectionLeft />
        <div className="section-right">
          <h3>Bem-vindo de volta!</h3>
          <Form isLogin={true} labelButton="Entrar" />
          <div>
            <p>Ainda não tem uma conta?</p>
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
