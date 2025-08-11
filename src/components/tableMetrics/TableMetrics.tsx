/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import AccordionUsage from "./Accordion";
import { metrics } from "../../services/metrics";
import { useAuth } from "../../hook/useAuth";
import Feedback from "../feedback/Feedback";
import { useEffect } from "react";
import type { IMetrics } from "../../types/metrics";
import useFeedback from "../../hook/useFeedback";

const TableMetrics = () => {
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const { uid_usuarios } = useAuth();
  const { data, isError } = useQuery<IMetrics[]>({
    queryKey: ["metrics", uid_usuarios],
    queryFn: () => metrics(uid_usuarios),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isError) {
      setIsVisible(isError);
      setMessage(
        "Não foi possível carregar os dados no momento. Tente novamente mais tarde"
      );
    }
  }, [isError]);

  const formatDate = (value: Date) => {
    const date = new Date(value);

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <AccordionUsage
            key={item.uid_medidas}
            data={formatDate(item.data)}
            item={item}
          />
        ))}

      <Feedback />
    </div>
  );
};

export default TableMetrics;
