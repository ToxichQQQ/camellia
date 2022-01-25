import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Header } from "../common/Header";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import { homoPartition } from "../../intils/constants/homoPartition";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles({
  soundCoefficient: {
    borderRadius: 7,
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
  select: {
    fontSize: "12px !important",
  },
  option: {
    fontSize: "12px !important",
  },
  soundSettings: {
    paddingLeft: "10px",
  },
  surDensityText: {
    margin: 0,
    display: "inline-block",
    paddingRight: 10,
  },
  surDensityContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    alignItems: "flex-end",
  },
  flexItem: {
    display: "flex",
    alignItems: "center",
  },
  square: {
    paddingLeft: 5,
  },
  textFieldStyles: {
    "& .MuiInput-input": {
      fontSize: 12,
    },
  },
  additionalSettings: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px !important",
  },
});

export function HeteroSoundCoefficient() {
  const classes = useStyles();
  return (
    <Grid className={classes.soundCoefficient}>
      <Header text="Коэффициент звукопоглощение неоднородной перегородки" />
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
                  label="Материал"
                />
                <FormControlLabel
                  value="male"
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Монолитная перегородка"
                />
                <FormControlLabel
                  value="mal"
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Двойная перегородка"
                />
                <FormControlLabel
                  value="mle"
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Точное значение"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8} className={classes.soundSettings}>
            <Grid container>
              <Grid item xs={12}>
                <Select fullWidth variant="standard" className={classes.select}>
                  {homoPartition.map((option, index) => (
                    <MenuItem
                      key={index}
                      value={option.value}
                      className={classes.option}
                    >
                      {`${option.label}, толщина ${option.width} мм`}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} className={classes.surDensityContainer}>
                <p className={classes.surDensityText}>
                  Поверхностная плотность, P
                </p>
                <TextField
                  variant="standard"
                  className={classes.textFieldStyles}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">кг/м2</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6} className={classes.flexItem}>
                    <p className={classes.surDensityText}>
                      Расст. между перегородками
                    </p>
                    <TextField
                      variant="standard"
                      className={classes.textFieldStyles}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">мм</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    className={`${classes.flexItem} ${classes.square}`}
                  >
                    <p className={classes.surDensityText}>Р1</p>
                    <TextField
                      variant="standard"
                      className={classes.textFieldStyles}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    className={`${classes.flexItem} ${classes.square}`}
                  >
                    <p className={classes.surDensityText}>Р2</p>
                    <TextField
                      variant="standard"
                      className={classes.textFieldStyles}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                className={`${classes.flexItem} ${classes.additionalSettings}`}
              >
                <span>
                  <p className={classes.surDensityText}>Q</p>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">дБ</InputAdornment>
                      ),
                    }}
                    variant="standard"
                    className={classes.textFieldStyles}
                  />
                </span>
                <span>
                  <p className={classes.surDensityText}>
                    Площадь перегородки в % от общей площади стены
                  </p>
                  <TextField
                    variant="standard"
                    className={classes.textFieldStyles}
                  />
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
