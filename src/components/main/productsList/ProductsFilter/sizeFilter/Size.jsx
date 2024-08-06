// mui components
import {Collapse, Grid } from "@mui/material";
// import styles
import styles from "./size.module.css";
// import react re-rendered
import { memo, useCallback, useState } from "react";
// components
import SizeItems from "./SizeItems";
import Data from "../openClose/data/Data";

const Size = ({ value, setValue, isLoading }) => {
  
  // collapse state
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
        {/* Data comp */}
        <Data open={open} setOpen={setOpen} value={"Size"} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : !value.length ? (
        <p>Not found</p>
      ) : (
        // collpase 
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
