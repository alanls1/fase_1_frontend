import type { Dispatch, SetStateAction } from "react";
import Button from "../button/Button";
import type { values } from "./Form";
import "./Form.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMetric } from "../../services/metrics";
import { useAuth } from "../../hook/useAuth";
import useFeedback from "../../hook/useFeedback";

type prop = values & {
  setEdit: Dispatch<SetStateAction<boolean>>;
};

const ShownMetrics = ({
  busto,
  calcado,
  cintura,
  coxa,
  quadril,
  torax,
  setEdit,
  uid_medidas,
}: prop) => {
  const queryClient = useQueryClient();
  const { uid_usuarios } = useAuth();
  const setMessage = useFeedback((state) => state.setMessage);
  const setIsVisible = useFeedback((state) => state.setIsVisible);

  const { mutate } = useMutation({
    mutationFn: async (uid?: string) => {
      const res = await deleteMetric(uid);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["metrics", uid_usuarios],
      });
      setMessage("Métrica deletada");
      setIsVisible(true);
    },
  });
  const handleDelete = () => mutate(uid_medidas);

  return (
    <div className="acc-form-container">
      <div>
        Busto: <span>{busto}</span>
      </div>
      <div>
        Toráx: <span>{torax}</span>
      </div>
      <div>
        Cintura: <span>{cintura}</span>
      </div>
      <div>
        Quadril: <span>{quadril}</span>
      </div>
      <div>
        Coxa: <span>{coxa}</span>
      </div>
      <div>
        Calçado: <span>{calcado}</span>
      </div>
      <div className="buttons">
        <Button type="button" variant="contained" onClick={() => setEdit(true)}>
          Editar
        </Button>
        <Button type="button" variant="contained" onClick={handleDelete}>
          Deletar
        </Button>
      </div>
    </div>
  );
};

export default ShownMetrics;
