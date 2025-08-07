/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import icon from "../../assets/icon.svg";
import "./SectionLeft.scss";

const SectionLeft = () => {
  const feedback = [
    {
      text: "Este aplicativo transformou minha forma de acompanhar meu progresso físico. Recomendo a todos!",
      small: "- Maria Silva, Personal Trainer",
    },
    {
      text: "Finalmente encontrei uma forma simples e visual de acompanhar minhas mudanças corporais. Excelente ferramenta!",
      small: "– João Mendes, Estudante de Educação Física",
    },
    {
      text: "Antes eu anotava tudo no papel. Agora, com esse app, vejo minha evolução com muito mais clareza.",
      small: "– Larissa Costa, Atleta Amadora",
    },
    {
      text: "Uso com meus clientes na academia e todos adoram ver seus gráficos de progresso. Recurso indispensável!",
      small: "– Carlos Lima, Personal Trainer",
    },
    {
      text: "Intuitivo, prático e motivador. Ver os resultados ao longo do tempo me mantém focado nos meus objetivos.",
      small: "– Renata Souza, Usuária do app",
    },
    {
      text: "Acompanhar minhas medidas nunca foi tão fácil. Adorei a interface e os relatórios automáticos!",
      small: "– Fernando Rocha, Nutricionista",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < feedback.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval); // limpeza quando o componente desmonta
  }, []);

  return (
    <div className="section-left">
      <section className="section-header">
        <div>
          <img src={icon} alt="Icone de métrica" />
          <h1>BodyMetrics</h1>
        </div>
        <p>Acompanhe sua evolução física com precisão e simplicidade</p>
      </section>
      <section className="feedback">
        <p>{feedback[index].text}</p>
        <small>{feedback[index].small}</small>
      </section>
    </div>
  );
};

export default SectionLeft;
