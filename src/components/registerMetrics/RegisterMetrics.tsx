import info from "../../assets/info.svg";
import Feedback from "../feedback/Feedback";
import Form from "./Form";
import "./RegisterMetrics.scss";

const RegisterMetrics = () => {
  return (
    <section className="register-metrics">
      <Form></Form>
      <img
        src={info}
        alt="Imagem de orientação para preenchimento do formulário de medidas"
      />
      <Feedback />
    </section>
  );
};

export default RegisterMetrics;
