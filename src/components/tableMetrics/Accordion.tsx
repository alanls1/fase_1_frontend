import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "./Form";

interface prop {
  data: string;
}

export default function AccordionUsage({ data }: prop) {
  return (
    <div>
      <Accordion>
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
          <Form />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
