import { Button, Collapse, Grid } from "@mui/material";
import styles from "./color.module.css";
import Data from "../isOpen/data/Data";
import { useState } from "react";

const FilterColor = ({ data }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={styles.filterData}>
        <Data value={"Filter colors"} setOpen={setOpen} open={open} />
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container className={styles.filterColor}>
          {data.map((item) => (
            <Grid item xs={3} key={item.key} className={styles.color}>
              <Button
                sx={{ background: item.color }}
                className={styles.colorItem}
              ></Button>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
};

export default FilterColor;
