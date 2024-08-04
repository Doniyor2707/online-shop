import { memo, useCallback } from "react";

const SizeItems = ({ label, id, setValue, isCheckedSize }) => {
  const handleCheckboxSize = useCallback(
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
    <label htmlFor={`size-${id}`}>
      <input
        name={`size-${id}`}
        type="checkbox"
        id={`size-${id}`}
        checked={isCheckedSize}
        onChange={handleCheckboxSize}
      />
      <div>{label}</div>
    </label>
  );
};

export default memo(SizeItems);
