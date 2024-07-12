
import styles from "./woman.module.css";
import Sidebar from "./sidebar/Sidebar";

const Woman = () => {

  const filterData = [
    {
      id:1,
      label:"Tops",
    },
    {
      id:2,
      label:"Printed T-shirts",
    },
    {
      id:3,
      label:"Plain T-shirts",
    },
    {
      id:4,
      label:"Kurti",
    },
    {
      id:5,
      label:"Boxers",
    },
    {
      id:6,
      label:"Full sleeve T-shirts",
    },
    {
      id:7,
      label:"Joggers",
    },
    {
      id:8,
      label:"Payjamas",
    },
    {
      id:9,
      label:"Jeans",
    }
  ]
 
  return (
    <div className={styles.woman}>
      {/* sidebar */}
      <Sidebar data={filterData} />

      {/* woman body */}
      <div className={styles.womanContent}></div>
    </div>
  );
};

export default Woman;
