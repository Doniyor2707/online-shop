import { Box, Slider } from "@mui/material";
import styles from "./slider.module.css";
import { useState } from "react";

const minDistance = 10;

const SliderPrice = () => {
  // state
  const [value1, setValue1] = useState([0, 300]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <div className={styles.slider}>
      <Box className={styles.sliderBar}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
      <div className={styles.price}>
        <span className={styles.priceBar}>{value1}$</span>
        <span className={styles.priceBar}>600$</span>
      </div>
    </div>
  );
};

export default SliderPrice;
