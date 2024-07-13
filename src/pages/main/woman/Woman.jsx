import styles from "./woman.module.css";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";

const Woman = () => {
  const filterData = [
    {
      id: 1,
      label: "Tops",
    },
    {
      id: 2,
      label: "Printed T-shirts",
    },
    {
      id: 3,
      label: "Plain T-shirts",
    },
    {
      id: 4,
      label: "Kurti",
    },
    {
      id: 5,
      label: "Boxers",
    },
    {
      id: 6,
      label: "Full sleeve T-shirts",
    },
    {
      id: 7,
      label: "Joggers",
    },
    {
      id: 8,
      label: "Payjamas",
    },
    {
      id: 9,
      label: "Jeans",
    },
  ];



  return (
    <Grid container className={styles.woman}>
      {/* sidebar */}
      <Grid item md={3}>
        <Sidebar data={filterData}/>
      </Grid>

      {/* woman body */}
      <Grid item md={9}>
        <div className={styles.womanContent}></div>
      </Grid>
    </Grid>
  );
};

export default Woman;
