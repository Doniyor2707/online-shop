import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from "./Input.module.css"
import { memo } from "react";

const SearchInput = ({value,setValue}) => {
  return (
    <TextField
      className={styles.inpt}
      placeholder="Search"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default memo(SearchInput);
