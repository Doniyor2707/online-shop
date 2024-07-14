import { Box, Slider } from "@mui/material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import styles from "./slider.module.css";
import { useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const SliderPrice = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  // state
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.slider}>
      <List sx={{ padding: 0 }}>
        <div className={styles.sliderWoman}>
          <div className={styles.sliderWomanItem} onClick={handleClick}>
            <h3 className={styles.title}>Price</h3>
            {open ? (
              <ExpandLess sx={{ color: "#807d7e" }} />
            ) : (
              <ExpandMore sx={{ color: "#807d7e" }} />
            )}
          </div>
        </div>
        <div className={styles.sliderItem}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Box className={styles.sliderBar}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <div className={styles.price}>
                <span className={styles.priceBar}>{value[0]}$</span>
                <span className={styles.priceBar}>{value[1]}$</span>
              </div>
            </List>
          </Collapse>
        </div>
      </List>
    </div>
  );
};

export default SliderPrice;
