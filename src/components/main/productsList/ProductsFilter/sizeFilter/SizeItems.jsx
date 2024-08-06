import { memo, useCallback } from "react";
import styles from "./size.module.css";

const SizeItems = ({ label, id, setValue, isCheckedSize }) => {
  const handleCheckbox = useCallback(
    (event) => {
      const checked = event.target.checked;

      setValue({
        id,
        label,
        isCheckedSize: checked,
      });
    },
    [id, label, isCheckedSize, setValue]
  );

  return (
    <label htmlFor={`size-${id}`} className={styles.checkBox}>
      <input
        name={`size-${id}`}
        type="checkbox"
        className={styles.checkBoxInput}
        id={`size-${id}`}
        checked={isCheckedSize}
        onChange={handleCheckbox}
      />
      <div className={styles.box}>
        <p className={styles.checkBoxLabel}>{label}</p>
      </div>
    </label>
  );
};

export default memo(SizeItems);
