import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import { Header } from "../common/Header";

const useStyles = makeStyles({
  volumeLevelContainer: {
    borderRadius: 7,
    minHeight: 50,
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
});

export function VolumeLevel({ volumeLevelSettings, setVolumeLevelSettings }) {
  const classes = useStyles();

  const [settingsType, setSettingsType] = useState("standardLevel");
  const [disableFields, setDisableFields] = useState(true);
  const [initialValues, setInitialValues] = useState(volumeLevelSettings);

  useEffect(() => {
    if (settingsType === "handleSettings") {
      setDisableFields(false);
    } else {
      setDisableFields(true);
      setVolumeLevelSettings(initialValues);
    }
  }, [settingsType]);

  const handleVolumeLevel = (val, position) => {
    setVolumeLevelSettings((prevState) =>
      prevState.map((item, index) => (index === position ? (item = val) : item))
    );
  };

  return (
    <Grid container className={classes.volumeLevelContainer}>
      <Header text="Уровень речи в контролируемом помещении" />
      <Grid item xs={12} className={classes.volumeSettings}>
        <Grid container>
          <Grid item xs={4} className={classes.volumeMode}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="volumeMode"
                name="controlled-radio-buttons-group"
                value={settingsType}
                onChange={(e) => setSettingsType(e.target.value)}
              >
                <FormControlLabel
                  className={classes.volumeRadioButton}
                  value={"handleSettings"}
                  label="Ручная настройка"
                  control={<Radio />}
                />
                <FormControlLabel
                  value={"standardLevel"}
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Стандартный уровень речи"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={4} className={classes.frequencyContainer}>
                <p>Уровень речи, дБ</p>
              </Grid>
              <Grid item xs={8} className={classes.frequencyValues}>
                <Grid item xs={2} className={classes.frequencyItem}>
                  <TextField
                    label="250 Гц"
                    className={classes.textFieldStyles}
                    size="small"
                    value={volumeLevelSettings[0]}
                    onChange={(e) => handleVolumeLevel(e.target.value, 0)}
                    disabled={disableFields}
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
                    value={volumeLevelSettings[1]}
                    onChange={(e) => handleVolumeLevel(e.target.value, 1)}
                    disabled={disableFields}
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
                    disabled={disableFields}
                    value={volumeLevelSettings[2]}
                    onChange={(e) => handleVolumeLevel(e.target.value, 2)}
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
                    disabled={disableFields}
                    value={volumeLevelSettings[3]}
                    onChange={(e) => handleVolumeLevel(e.target.value, 3)}
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
                    disabled={disableFields}
                    value={volumeLevelSettings[4]}
                    onChange={(e) => handleVolumeLevel(e.target.value, 4)}
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
                    value={volumeLevelSettings[5]}
                    onChange={(e) => handleVolumeLevel(e.target.value, 5)}
                    disabled={disableFields}
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
