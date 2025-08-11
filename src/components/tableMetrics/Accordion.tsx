import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "./Form";
import ShownMetrics from "./shownMetrics";
import type { IMetrics } from "../../types/metrics";
import { useState } from "react";

interface prop {
  data: string;
  item: IMetrics;
}

export default function AccordionUsage({ data, item }: prop) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <Accordion sx={{ marginBlock: ".2rem" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="h3">{data}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            component="h6"
            sx={{
              marginLeft: "1rem",
              fontWeight: "bold",
            }}>
            Medidas:
          </Typography>
          {isEdit ? (
            <Form
              busto={item.busto}
              calcado={item.calcado}
              cintura={item.cintura}
              coxa={item.coxa}
              quadril={item.quadril}
              torax={item.torax}
              setEdit={setIsEdit}
              uid_medidas={item.uid_medidas}
            />
          ) : (
            <ShownMetrics
              busto={item.busto}
              calcado={item.calcado}
              cintura={item.cintura}
              coxa={item.coxa}
              quadril={item.quadril}
              torax={item.torax}
              setEdit={setIsEdit}
              uid_medidas={item.uid_medidas}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
