import styles from "./color.module.css"
import { memo, useCallback } from "react";

const ColorItem = ({ colorVal, id, title, setValue }) => {
  //handle checkbox
  const handleCheckbox = useCallback(
    (event) => {
      const checked = event.target.checked;

      //   value
      setValue({
        id,
        colorVal,
        title,
        isChecked: checked,
      });
    },
    [id, colorVal, title, setValue]
  );

  return (
    <label htmlFor={id} className={styles.checkBox}>
      <input
        name={id}
        type="checkbox"
        className={styles.checkBoxInput}
        id={id}
        onChange={handleCheckbox}
      />
      <div className={styles.colorBox} style={{ background: colorVal }}></div>
      <p className={styles.checkBoxLabel}>{title}</p>
    </label>
  );
};

export default memo(ColorItem);
