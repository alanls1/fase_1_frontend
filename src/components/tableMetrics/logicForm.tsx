/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FormEvent } from "react";
import useFeedback from "../../hook/useFeedback";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../hook/useAuth";
import type { IUpdateMetrics } from "../../types/metrics";
import { updateMetrics } from "../../services/metrics";
import type { values } from "./Form";

const useForm = () => {
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const queryClient = useQueryClient();

  const { uid_usuarios } = useAuth();

  const { mutate } = useMutation({
    mutationFn: async (data: IUpdateMetrics) => {
      const res = await updateMetrics(data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["metrics", uid_usuarios],
      });
      setMessage("Valores atualizado");
      setIsVisible(true);
      handleReset();
    },
    onError: (error: any) => {
      setMessage(error);
      setIsVisible(true);
    },
  });

  const handleReset = () => {
    setValue({
      busto: 0,
      torax: 0,
      cintura: 0,
      quadril: 0,
      coxa: 0,
      calcado: 0,
      uid_medidas: "",
    });
  };

  const [value, setValue] = useState<values>({
    busto: 0,
    torax: 0,
    cintura: 0,
    quadril: 0,
    coxa: 0,
    calcado: 0,
    uid_medidas: "",
  });

  const handleChange = (e: number, field: keyof values) => {
    setValue((prev) => ({ ...prev, [field]: e }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();

    mutate({ ...value });
  };

  return {
    handleChange,
    submit,
    setValue,
    value,
  };
};

export default useForm;
