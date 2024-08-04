import { Button, Collapse, Grid } from "@mui/material";
import styles from "./size.module.css";
import Data from "../openClose/data/Data";
import { memo, useCallback, useState } from "react";
import SizeItems from "./SizeItems";

const Size = ({ value, setValue, isLoading }) => {
  const [open, setOpen] = useState(true);

  // handle Size
  const handleChange = useCallback(
    (size) => {
      setValue(size);
    },
    [setValue]
  );

  return (
    <>
      <div className={styles.sizeFilter}>
        <Data open={open} setOpen={setOpen} value={"Size"} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : !value.length ? (
        <p>Not found</p>
      ) : (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container className={styles.filterSize}>
            {value.map((size) => (
              <Grid item xs={3} key={size.id} className={styles.size}>
                <SizeItems {...size} setValue={handleChange} />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      )}
    </>
  );
};

export default memo(Size);
