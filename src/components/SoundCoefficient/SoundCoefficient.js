import React, { useEffect, useState } from "react";
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
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles({
  soundCoefficient: {
    borderRadius: 7,
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
  select: {
    pointerEvents: (props) => props.settingsType !== "material" && "none",
    fontSize: "12px !important",
  },
  option: {
    fontSize: "12px !important",
  },
  soundSettings: {
    paddingLeft: "10px",
  },
  surDensityText: {
    display: "inline-block",
    paddingRight: 10,
  },
  surDensityContainer: {
    paddingTop: 20,
  },
  flexItem: {
    display: "flex",
    alignItems: "flex-start",
  },
  square: {
    paddingLeft: 5,
  },
  textFieldStyles: {
    "& .MuiInput-input": {
      fontSize: 12,
    },
  },
  showCheckBox: {
    display: "flex !important",
    justifyContent: "flex-end",
    "& .MuiTypography-root": {
      fontSize: 12,
    },
  },
  showSettingsButton: {
    marginTop: 0,
    fontSize: 10,
    paddingRight: 20,
    color: "#3f51b5",
    cursor: "pointer",
  },
});

export function SoundCoefficient({
  isShowHetero,
  setShowHetero,
  setOpenModal,
  soundValue,
  setSoundValue,
}) {
  const [settingsType, setSettingsType] = useState("material");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [highDensity, setHighDensity] = useState("");
  const classes = useStyles({ settingsType });

  const handleCreateNewValue = (val) => {
    setHighDensity(val);
    let newValue = null;
    if (val > 200) {
      newValue = 14.5 * Math.log10(val) + 15;
    } else {
      newValue = 12.5 * Math.log10(val) + 14;
    }
    setSoundValue(Math.round(newValue));
  };

  const handleCreateNewValueBlock = () => {
    if (settingsType === "doubleBlock" && firstValue && secondValue) {
      const newValue = Number(firstValue) + Number(secondValue);
      setSoundValue(newValue);
    }
  };

  const handleTypeChange = (value) => {
    if (value !== "material") {
      setSoundValue(null);
    }
    setSettingsType(value);
  };
  const handleChangeShowHetero = () => {
    setShowHetero((prevState) => !prevState);
    if (!isShowHetero) {
      setOpenModal(true);
    }
  };

  useEffect(() => {
    handleCreateNewValueBlock();
  }, [firstValue, secondValue, settingsType]);

  return (
    <Grid className={classes.soundCoefficient}>
      <Header text="Коэффициент звукопоглощение однородной перегородки" />
      <Grid item xs={12} className={classes.volumeSettings}>
        <Grid container>
          <Grid item xs={4} className={classes.volumeMode}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="volumeMode"
                name="controlled-radio-buttons-group"
                value={settingsType}
                onChange={(e) => {
                  setSoundValue(null);
                  handleTypeChange(e.target.value);
                }}
              >
                <FormControlLabel
                  className={classes.volumeRadioButton}
                  value="material"
                  control={<Radio />}
                  label="Материал"
                />
                <FormControlLabel
                  value="monoBlock"
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Монолитная перегородка"
                />
                <FormControlLabel
                  value="doubleBlock"
                  className={classes.volumeRadioButton}
                  control={<Radio />}
                  label="Двойная перегородка"
                />
                <FormControlLabel
                  value="exactValue"
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
                <Select
                  fullWidth
                  variant="standard"
                  className={classes.select}
                  onChange={(e) => setSoundValue(e.target.value)}
                >
                  {homoPartition.map((option, index) => (
                    <MenuItem
                      key={index}
                      value={option.value}
                      className={classes.option}
                    >
                      {`${option.label}, ${option.width}`}
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
                  value={highDensity}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/g, "");
                    handleCreateNewValue(newValue);
                  }}
                  disabled={settingsType !== "monoBlock"}
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
                      disabled={true}
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
                      disabled={settingsType !== "doubleBlock"}
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\D/g, "");
                        setFirstValue(newValue);
                      }}
                      variant="standard"
                      value={firstValue}
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
                      disabled={settingsType !== "doubleBlock"}
                      variant="standard"
                      value={secondValue}
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\D/g, "");
                        setSecondValue(newValue);
                      }}
                      className={classes.textFieldStyles}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <p className={classes.surDensityText}>Q</p>
                <TextField
                  value={soundValue}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/g, "");
                    setSoundValue(newValue);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">дБ</InputAdornment>
                    ),
                  }}
                  disabled={settingsType !== "exactValue"}
                  variant="standard"
                  className={classes.textFieldStyles}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.showCheckBox}
            control={
              <Checkbox
                value={isShowHetero}
                onChange={handleChangeShowHetero}
              />
            }
            label="Имеется неоднородная перегородка"
          />
        </Grid>
        {isShowHetero && (
          <p
            className={classes.showSettingsButton}
            onClick={() => setOpenModal(true)}
          >
            Открыть настройки неоднородной перегородки
          </p>
        )}
      </Grid>
    </Grid>
  );
}
