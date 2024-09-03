import React, { useCallback, useState } from "react";
import { useLoginMutation } from "../../../app/services/authLogin/authSlice";
// navigate
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
// components
import ImageSection from "../../../components/authValidate/imageSection/ImageSection";
import Title from "../../../components/authValidate/titleSection/Title";
import InputUserName from "../../../components/authValidate/formInput/InputUserName";
import InputPassword from "../../../components/authValidate/formInput/InputPassword";

// styles
import styles from "./login.module.css";

function Login() {
  // state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // navigate
  const navigate = useNavigate();

  // mutation
  const [login, { isLoading, error }] = useLoginMutation();

  // handel sumbit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ username, password }).unwrap();
      if (res.token) navigate("/");
    } catch (err) {
      console.log(err);
      
    }
  };

  const handleUserName = useCallback(
    (value) => {
      setUsername(value);
    },
    [setUsername]
  );

  const handlePassword = useCallback(
    (value) => {
      setPassword(value);
    },
    [setPassword]
  );

  return (
    <Box display={"flex"}>
      {/* img section */}
      <ImageSection />

      <Box display={"flex"} flexDirection={"column"}>
        {/* title */}
        <Title title={"Sign In Pege"} />

        <form onSubmit={handleSubmit} className={styles.form}>
          <InputUserName value={username} handleUserName={handleUserName} />
          <InputPassword value={password} handlePassword={handlePassword} />
          <button className={styles.btn} type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Sign In"}
          </button>
          {error && <Alert severity="error" variant="outlined">Login yoki parolda xatolik mavjud {error.data}</Alert>}
        </form>
      </Box>
    </Box>
  );
}

export default Login;
