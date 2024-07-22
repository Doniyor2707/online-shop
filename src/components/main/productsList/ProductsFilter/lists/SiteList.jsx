import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./list.module.css";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { memo } from "react";

const SiteList = ({ data }) => {
  return (
    <div className={styles.womanList}>
      <List>
        {data.map((item) => (
          <ListItemButton key={item.id}>
            <ListItemText className={styles.womanLink} primary={item.label} />
            <NavigateNextIcon sx={{ color: "#8a8989" }} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default memo(SiteList);
