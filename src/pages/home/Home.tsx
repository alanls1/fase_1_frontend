import Feedback from "../../components/feedback/Feedback";
import { Footer } from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RegisterMetrics from "../../components/registerMetrics/RegisterMetrics";
import TableMetrics from "../../components/tableMetrics/TableMetrics";
import { useAuth } from "../../hook/useAuth";
import useFeedback from "../../hook/useFeedback";
import "./Home.scss";

const Home = () => {
  const { codigo_publico } = useAuth();
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const clipBoard = () => {
    navigator.clipboard
      .writeText(codigo_publico)
      .then(() => {
        setMessage("Código copiado!");
        setIsVisible(true);
      })
      .catch(() => {
        setMessage("Erro ao copiar");
        setIsVisible(true);
      });
  };

  return (
    <div className="container-hero">
      <Header />
      <main className="main">
        {codigo_publico && (
          <div className="code">
            <h3>Código Público: </h3>{" "}
            <p className="clipBoard" onClick={clipBoard}>
              {codigo_publico}
            </p>
          </div>
        )}
        <h3 className="metricts-registred">Cadastro de medidas</h3>
        <RegisterMetrics />
        <h3 className="metricts-registred">Medidas cadastradas</h3>
        <TableMetrics />
      </main>
      <Footer />
      <Feedback />
    </div>
  );
};

export default Home;
