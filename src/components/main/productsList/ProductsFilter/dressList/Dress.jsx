import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./dress.module.css";
import Data from "../openClose/data/Data";
import { memo, useState } from "react";

const Dress = ({ data }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.dressList}>
      <div className={styles.dressTitle}>
        <Data open={open} setOpen={setOpen} value={"Dress style"} />
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {data.map((item) => (
            <ListItemButton key={item.id}>
              <ListItemText className={styles.dressLink} primary={item.label} />
              <NavigateNextIcon sx={{ color: "#8a8989" }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default memo(Dress);
