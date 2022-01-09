import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Header } from "../common/Header";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

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
    width: 150,
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
});

export function SettlementPanel() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.settings}>
        <Grid container>
          <Grid item xs={3}>
            <Grid container className={classes.buttonsContainer}>
              <Grid item xs={12}>
                <Button className={classes.button} variant="contained">
                  Рассчет
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.button} variant="contained">
                  Сброс
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.button} variant="contained">
                  О программе
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
                  <TableCell className={classes.summaryTableCell}>1</TableCell>
                  <TableCell className={classes.summaryTableCell}>2</TableCell>
                  <TableCell className={classes.summaryTableCell}>3</TableCell>
                  <TableCell className={classes.summaryTableCell}>4</TableCell>
                  <TableCell className={classes.summaryTableCell}>5</TableCell>
                  <TableCell className={classes.summaryTableCell}>6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.summaryTableCell}>
                    Минимально необходимые значения
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>1</TableCell>
                  <TableCell className={classes.summaryTableCell}>2</TableCell>
                  <TableCell className={classes.summaryTableCell}>3</TableCell>
                  <TableCell className={classes.summaryTableCell}>4</TableCell>
                  <TableCell className={classes.summaryTableCell}>5</TableCell>
                  <TableCell className={classes.summaryTableCell}>6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.summaryTableCell}>
                    Вклад частот в разборчивать формант
                  </TableCell>
                  <TableCell className={classes.summaryTableCell}>1</TableCell>
                  <TableCell className={classes.summaryTableCell}>2</TableCell>
                  <TableCell className={classes.summaryTableCell}>3</TableCell>
                  <TableCell className={classes.summaryTableCell}>4</TableCell>
                  <TableCell className={classes.summaryTableCell}>5</TableCell>
                  <TableCell className={classes.summaryTableCell}>6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
