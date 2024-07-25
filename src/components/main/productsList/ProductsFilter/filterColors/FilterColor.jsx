import { Collapse, Grid } from "@mui/material";
import styles from "./color.module.css";
import Data from "../openClose/data/Data";
import { memo, useCallback, useState } from "react";
import ColorItem from "./ColorItem";

const FilterColor = ({ data, setValue, isLoading }) => {
  const [open, setOpen] = useState(true);

  const handleChange = useCallback(
    (color) => {
      setValue(color);
    },
    [setValue]
  );

  return (
    <>
      <div className={styles.filterData}>
        <Data value={"Filter colors"} setOpen={setOpen} open={open} />
      </div>
      {isLoading ? (
        "Loading..."
      ) : !data.length ? (
        "Not found"
      ) : (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container className={styles.filterColor}>
            {data.map((color) => (
              <Grid item xs={3} key={color.id}>
                <ColorItem {...color}  setValue={handleChange} />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      )}
    </>
  );
};

export default memo(FilterColor);
