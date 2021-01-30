import React, { useState, ChangeEvent } from "react";
import { User } from "../constants";
import { getValidCards } from "../utils";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface ResultsProps {
  user: User | null;
}

export function Results(props: ResultsProps) {
  const { user } = props;
  const [sum, setSum] = useState(0);

  if (!user) return null;

  const cards = getValidCards(user);

  if (cards.length === 0)
    return (
      <Typography variant="body1" align="center" style={{ marginBottom: 24 }}>
        <em>
          Sadly, we found no eligible Cards for you at the moment. Please, try
          again later! We update frequently.
        </em>
      </Typography>
    );

  const handleCardSelect = (
    e: ChangeEvent<HTMLInputElement>,
    credit: number
  ) => {
    e.stopPropagation();
    if (e.target.checked) {
      setSum(sum + credit);
    } else {
      setSum(sum - credit);
    }
  };

  const renderCards = cards.map((card) => (
    <Grid key={card.name} item xs={12} sm={6}>
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls={`additional-actions-content-${card.name}`}
          id={`additional-actions-header-${card.name}`}
        >
          <FormControlLabel
            aria-label={card.name}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            control={
              <Checkbox
                onChange={(e) => handleCardSelect(e, card.creditAvailable)}
              />
            }
            label={card.name}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Paper variant="outlined" style={{ padding: 4 }}>
                <Typography variant="body1">
                  APR:&nbsp;<strong>{card.apr}%</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" style={{ padding: 4 }}>
                <Typography variant="body1">
                  Balance Tranfer:&nbsp;
                  <strong>{card.balanceTranferDurationInMonths} months</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" style={{ padding: 4 }}>
                <Typography variant="body1">
                  Purchase Offer:&nbsp;
                  <strong>{card.purchaseOfferDurationInMonths} months</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined" style={{ padding: 4 }}>
                <Typography variant="body1">
                  Credit:&nbsp;<strong>£ {card.creditAvailable}</strong>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  ));

  return (
    <>
      <Typography variant="body1" align="center" style={{ marginBottom: 24 }}>
        <em>
          Here are the Cards we found for you! The combined available credit of
          all the Cards you selected is<strong> £ {sum}</strong>.
        </em>
      </Typography>
      <Grid container spacing={2}>
        {renderCards}
      </Grid>
    </>
  );
}
