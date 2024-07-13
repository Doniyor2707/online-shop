import { Box, Slider } from "@mui/material";
import styles from "./slider.module.css";
import { useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const SliderPrice = () => {
  // state
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.slider}>
      <Box className={styles.sliderBar}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
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
    </div>
  );
};

export default SliderPrice;
