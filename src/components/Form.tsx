import React, { Dispatch, SetStateAction, useState, FormEvent } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { User, EmploymentStatus } from "../constants";

interface FormProps {
  onSubmit: Dispatch<SetStateAction<User | null>>;
}

export function Form(props: FormProps) {
  const [anualIncome, setAnualIncome] = useState<string>("0");
  const [employmentStatus, setEmploymentStatus] = useState<
    EmploymentStatus | ""
  >("");

  const { onSubmit } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (employmentStatus && anualIncome !== undefined) {
      const income = parseInt(anualIncome);
      onSubmit({
        anualIncome: income,
        employmentStatus,
      });
    }
  };

  return (
    <>
      <Typography variant="body1" align="center" style={{ marginBottom: 24 }}>
        <em>
          Please, enter your<strong> yearly income </strong>and
          <strong> employment status </strong>and we'll show you all the Cards
          you're eligible for.
        </em>
      </Typography>
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="anual-income">Anual Income</InputLabel>
                <Input
                  required
                  inputProps={{ min: "0", max: "999999999" }}
                  onFocus={(e) => e.target.select()}
                  type="number"
                  id="anual-income"
                  value={anualIncome}
                  onChange={(e) => setAnualIncome(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">£</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel shrink id="employment-status-label">
                  Employment Status
                </InputLabel>
                <Select
                  labelId="employment-status-label"
                  id="employment-status"
                  value={employmentStatus}
                  onChange={(e) =>
                    setEmploymentStatus(e.target.value as EmploymentStatus)
                  }
                  label="Employment Status"
                  required
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <em>----</em>
                  </MenuItem>
                  <MenuItem value="Full time">Full time</MenuItem>
                  <MenuItem value="Part time">Part time</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container item xs={12} justify="center">
              <Button type="submit" variant="contained" color="primary">
                Show available Cards
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
