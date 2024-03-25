import styles from "./loginPage.module.css";
import ButtonHover from "../../components/buttonHover/buttonHover";
import { useEffect, useState } from "react";

function LoginPage() {
  const [isUserLogging, setIsUserLogging] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassowrd, setRepeatPassword] = useState<string>("");

  useEffect(() => {
    console.log("email : " + email);
    console.log("password : " + password);
    console.log("repeated password : " + repeatPassowrd + "\n\n\n");
  }, [email, password, repeatPassowrd]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>Starting with NewNet ?</div>
        <div className={styles.formContainer}>
          <input
            className={styles.inputClass}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className={styles.inputClass}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          {isUserLogging ? null : (
            <input
              className={styles.inputClass}
              placeholder="repeat password"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            ></input>
          )}

          <ButtonHover text={isUserLogging ? "Login" : "Register"} />
          {isUserLogging ? (
            <div
              onClick={() => {
                setIsUserLogging(false);
              }}
            >
              Create New Account
            </div>
          ) : (
            <div
              onClick={() => {
                setIsUserLogging(true);
              }}
            >
              Click Here To Login
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
