/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FormEvent } from "react";
import useFeedback from "../../hook/useFeedback";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../hook/useAuth";
import type { INewMetrics } from "../../types/metrics";
import { newMetrics } from "../../services/metrics";
import type { values } from "./Form";

const useForm = () => {
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const queryClient = useQueryClient();

  const { uid_usuarios } = useAuth();

  const { mutate } = useMutation({
    mutationFn: async (data: INewMetrics) => {
      const res = await newMetrics(data);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["metrics", uid_usuarios] });
      setMessage("Medidas criadas");
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
    });
  };

  const [value, setValue] = useState<values>({
    busto: 0,
    torax: 0,
    cintura: 0,
    quadril: 0,
    coxa: 0,
    calcado: 0,
  });

  const handleChange = (e: number, field: keyof values) => {
    setValue((prev) => ({ ...prev, [field]: e }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();

    mutate({ ...value, uid_usuarios });
  };

  return {
    handleChange,
    submit,
    value,
  };
};

export default useForm;
