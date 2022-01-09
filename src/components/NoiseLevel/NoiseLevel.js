import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import { Header } from "../common/Header";
import Select from "@mui/material/Select";
import { noiseLevel } from "../../intils/constants/noiseLevel";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles({
  volumeLevelContainer: {
    borderRadius: 7,
    minHeight: 50,
    marginTop: "10px",
    boxShadow: "10px 1px 10px 1px rgba(34, 60, 80, 0.2)",
  },
  volumeSettings: {
    padding: "10px",
  },
  volumeMode: {
    paddingLeft: "10px",
    borderRight: "1px solid grey",
  },
  volumeRadioButton: {
    " & .MuiTypography-root": {
      fontSize: 12,
    },
  },
  frequencyContainer: {
    paddingLeft: 10,
    display: "flex",
    flexWrap: "wrap",
  },
  frequencyValues: {
    display: "flex",
    paddingTop: 10,
  },
  frequencyItem: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingRight: 4,
  },
  textFieldStyles: {
    "& .MuiInput-input": {
      fontSize: "12px !important",
    },
  },
  settingsContainer: {
    paddingLeft: 10,
  },
  select: {
    fontSize: "12px !important",
    marginBottom: 10,
  },
});

export function NoiseLevel() {
  const classes = useStyles();
  return (
    <Grid container className={classes.volumeLevelContainer}>
      <Header text="Уровень шума вне контролируемого помещения" />
      <Grid item xs={12} className={classes.volumeSettings}>
        <Grid container>
          <Grid item xs={4} className={classes.volumeMode}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="volumeMode"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  className={classes.volumeRadioButton}
                  value="female"
                  control={<Radio />}
                  label="Предельный спектр"
                />
                <FormControlLabel
                  value="male"
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Ручная настройка"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8} className={classes.settingsContainer}>
            <Grid container>
              <Grid item xs={12}>
                <Select fullWidth variant="standard" className={classes.select}>
                  {noiseLevel.map((item) => (
                    <MenuItem key={item.label} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={4} className={classes.frequencyContainer}>
                <p>Уровень речи, дБ</p>
              </Grid>
              <Grid item xs={8} className={classes.frequencyValues}>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    label="250 Гц"
                    className={classes.textFieldStyles}
                    size="small"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    label="500 Гц"
                    className={classes.textFieldStyles}
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    variant="standard"
                    label="1000 Гц"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    className={classes.textFieldStyles}
                  />
                </Grid>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    size="small"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="2000 Гц"
                    className={classes.textFieldStyles}
                  />
                </Grid>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    size="small"
                    variant="standard"
                    label="4000 Гц"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.textFieldStyles}
                  />
                </Grid>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    label="6000 Гц"
                    className={classes.textFieldStyles}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
