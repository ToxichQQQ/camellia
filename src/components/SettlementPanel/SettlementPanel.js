import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles({
  container: {
    borderRadius: 7,
    minHeight: 50,
    marginTop: "10px",
    boxShadow: "10px 1px 10px 1px rgba(34, 60, 80, 0.2)",
  },
  settings: {
    padding: "10px",
  },
  buttonsContainer: {
    paddingLeft: 10,
  },
  button: {
    width: 170,
    marginBottom: "5px !important",
    fontSize: "12px !important",
  },
  summaryTable: {
    width: "100%",
  },
  summaryTableCell: {
    fontSize: "12px !important",
    padding: "2px !important",
    textAlign: "center !important",
  },
  settingSelect: {
    width: 170,
    marginBottom: "5px !important",
  },
  selectLabel: {
    left: "-17px !important",
  },
});

export function SettlementPanel({ voiceLevel, handleGetNewValues }) {
  const classes = useStyles();
  const ids = ["1"];
  const levelSettings = [
    {
      title: "Смысл не понятен",
      values: ["-12", "-11", "-10", "-9", "-9", "-12"],
    },
    {
      title: "Предельно допустимая",
      values: ["-12", "-10", "-9", "-8", "-8", "-12"],
    },
    {
      title: "Удовлетворительная",
      values: ["-11", "-9", "-8", "-6", "-7", "-12"],
    },
  ];
  const [selectedLevel, setSelectedLevel] = useState(levelSettings[0]);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.settings}>
        <Grid container>
          <Grid item xs={3}>
            <Grid container className={classes.buttonsContainer}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel
                    className={classes.selectLabel}
                    id="settingSelect"
                  >
                    Уровень разборчивость речи
                  </InputLabel>
                  <Select
                    variant="standard"
                    labelId="settingSelect"
                    className={classes.settingSelect}
                    value={selectedLevel}
                    displayEmpty
                    renderValue={(value) => <span>{value.title}</span>}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levelSettings.map((item) => (
                      <MenuItem key={item.title} value={item}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={handleGetNewValues}
                >
                  Рассчет
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.button} variant="contained">
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Table className={classes.summaryTable}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.summaryTableCell}></TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    250 Гц
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    500 Гц
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    1000 Гц
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    2000 Гц
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    4000 Гц
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    6000 Гц
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.summaryTableCell}>
                    Полученные значения, дБ
                  </TableCell>
                  {voiceLevel.map((item, index) => (
                    <TableCell
                      className={classes.summaryTableCell}
                      style={{
                        fontWeight: "bold",
                        backgroundColor:
                          item < Number(selectedLevel.values[index])
                            ? "green"
                            : item - Number(selectedLevel.values[index]) <= 6
                            ? "yellow"
                            : "red",
                      }}
                    >
                      {voiceLevel[index].toFixed(1)}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className={classes.summaryTableCell}>
                    Минимально необходимые значения
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    {selectedLevel.values[0]}
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    {selectedLevel.values[1]}
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    {selectedLevel.values[2]}
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    {selectedLevel.values[3]}
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    {selectedLevel.values[4]}
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    {selectedLevel.values[5]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.summaryTableCell}>
                    Вклад частот в разборчивать формант
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    6,7%
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    12,5%
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    21,2%
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    29,4%
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    25%
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>
                    5,2%
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
