import { Collapse, Grid } from "@mui/material";
import styles from "./color.module.css";
import Data from "../openClose/data/Data";
import { useState } from "react";

const FilterColor = ({ data }) => {

  const [open, setOpen] = useState(true);
  
  const [activeColor, setActiveColor] = useState(null);

  const handleColorClick = (key) => {
    setActiveColor(key);
  };

  return (
    <>
      <div className={styles.filterData}>
        <Data value={"Filter colors"} setOpen={setOpen} open={open} />
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container className={styles.filterColor}>
          {data.map(({ key, color, title }) => (
            <Grid
              item
              xs={3}
              key={key}
              className={[styles.color ,activeColor === key ? styles.active : ""]}
              onClick={() => handleColorClick(key)}
            >
              <div
                style={{ background: color }}
                className={styles.colorItem}
              ></div>
              <span className={styles.colorTitle}>{title}</span>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
};

export default FilterColor;
