import { Button, Grid } from "@mui/material";
import styles from "./size.module.css";

const Size = ({ value }) => {
  return (
    <Grid container className={styles.filterSize}>
      {value.map((item) => (
        <Grid item xs={3} key={item.id} className={styles.size}>
          <Button variant="outlined" className={styles.sizeItem}>
            {item.lable}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Size;
