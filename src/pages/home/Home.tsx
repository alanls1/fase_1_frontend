import Header from "../../components/header/Header";
import TableMetrics from "../../components/tableMetrics/TableMetrics";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <h3 className="metricts-registred">Medidas cadastradas</h3>
        <TableMetrics />
      </main>
    </div>
  );
};

export default Home;
