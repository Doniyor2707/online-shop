import { Button, Collapse, Grid } from "@mui/material";
import styles from "./size.module.css";
import Data from "../openClose/data/Data";
import { useState } from "react";

const Size = ({ value }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={styles.sizeFilter}>
        <Data open={open} setOpen={setOpen} value={"Size"} />
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container className={styles.filterSize}>
          {value.map((item) => (
            <Grid item xs={3} key={item.id} className={styles.size}>
              <Button variant="outlined" className={styles.sizeItem}>
                {item.lable}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
};

export default Size;
