import styles from "./inp.module.css"

const InputUserName = ({handleUserName,value}) => {

  return (
    <div className={styles.inpUserName}>
      <h5 className={styles.title}>Username:</h5>
      <input
        type="text"
        value={value}
        onChange={(e) => handleUserName(e.target.value)}
        required
      />
    </div>
  );
};

export default InputUserName;
