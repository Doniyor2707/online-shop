import { Button, Grid } from "@mui/material";
import styles from "./color.module.css"

const FilterColor = ({ data }) => {
  return (
    <Grid container className={styles.filterColor}>
      {data.map((item) => (
        <Grid item xs={3} key={item.key} className={styles.color}>
          <Button variant="outlined" sx={{background:item.color}} className={styles.colorItem}></Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilterColor;
