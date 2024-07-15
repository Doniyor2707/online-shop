import { Box, Slider } from "@mui/material";
import { Collapse, List } from "@mui/material";
import styles from "./slider.module.css";
import { useState } from "react";
import Data from "../isOpen/data/Data";

function valuetext(value) {
  return `${value}°C`;
}

const SliderPrice = () => {
  // state
  const [open, setOpen] = useState(true);

  // state
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };


  return (
    <div className={styles.slider}>
      <List sx={{ padding: 0 }}>
        <div className={styles.sliderWoman}>
          <Data setOpen={setOpen} open={open} value={"Price"}/>
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
