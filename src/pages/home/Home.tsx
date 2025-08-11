import { Footer } from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RegisterMetrics from "../../components/registerMetrics/RegisterMetrics";
import TableMetrics from "../../components/tableMetrics/TableMetrics";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container-hero">
      <Header />
      <main className="main">
        <h3 className="metricts-registred">Cadastro de medidas</h3>
        <RegisterMetrics />
        <h3 className="metricts-registred">Medidas cadastradas</h3>
        <TableMetrics />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
