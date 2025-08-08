/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import AccordionUsage from "./Accordion";
import { metrics } from "../../services/metrics";
import { useAuth } from "../../hook/useAuth";
import Feedback from "../feedback/Feedback";
import { useEffect, useState } from "react";
import type { IMetrics } from "../../types/metrics";

const TableMetrics = () => {
  const { uid_usuarios } = useAuth();
  const { data, error, isError } = useQuery<IMetrics[]>({
    queryKey: ["metrics", uid_usuarios],
    queryFn: () => metrics(uid_usuarios),
    refetchOnWindowFocus: false,
  });

  const [open, setOpen] = useState<{
    isVisible: boolean;
    message: string;
  }>({ isVisible: false, message: "" });
  console.log(data);

  useEffect(() => {
    if (isError) {
      setOpen({
        isVisible: isError,
        message: error as any as string,
      });
    }
  }, [error, isError]);

  const formatDate = (value: Date) => {
    const date = new Date(value);

    return date.toLocaleDateString("pt-br");
  };

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item) => <AccordionUsage data={formatDate(item.data)} />)}

      <Feedback open={open} setOpen={setOpen} />
    </div>
  );
};

export default TableMetrics;
