import styles from "./inp.module.css"

const InputPassword = ({handlePassword,password}) => {
  return (
    <div className={styles.password}>
      <h5 className={styles.title}>Password:</h5>
      <input
        type="password"
        value={password}
        onChange={(e) => handlePassword(e.target.value)}
        required
      />
    </div>
  );
};

export default InputPassword;
