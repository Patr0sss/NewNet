import styles from "./loginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isUserLogging, setIsUserLogging] = useState<boolean>(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassowrd, setRepeatPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage({ email: "", password: "" });

    if (password === repeatPassowrd) {
      try {
        const res = await fetch("http://localhost:3000/signup", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await res.json();

        if (data.errors) {
          setErrorMessage({
            email: data.errors.email,
            password: data.errors.password,
          });
        }

        if (data.user) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage({ email: "", password: "Passwords are not the same" });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage({ email: "", password: "" });

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (data.user) {
        navigate("/");
      }
      if (data.errors) {
        setErrorMessage({
          email: data.errors.email,
          password: data.errors.password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          {isUserLogging ? "Login" : "Register"}
        </div>
        <div className={styles.formContainer}>
          <input
            className={styles.inputClass}
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div style={{ fontSize: "10px", color: "#df2c14" }}>
            {errorMessage.email}
          </div>
          <input
            className={styles.inputClass}
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <div style={{ fontSize: "10px", color: "#df2c14" }}>
            {errorMessage.password}
          </div>
          {isUserLogging ? null : (
            <input
              type="password"
              className={styles.inputClass}
              placeholder="repeat password"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            ></input>
          )}
        </div>
        <button
          onClick={isUserLogging ? handleLogin : handleSignUp}
          className={styles.signUpButton}
        >
          {isUserLogging ? "Login" : "Register"}
        </button>

        {isUserLogging ? (
          <div
            onClick={() => {
              setIsUserLogging(false);
              setErrorMessage({ email: "", password: "" });
            }}
            className={styles.actionChanger}
          >
            Create New Account
          </div>
        ) : (
          <div
            onClick={() => {
              setIsUserLogging(true);
              setErrorMessage({ email: "", password: "" });
            }}
            className={styles.actionChanger}
          >
            Click Here To Login
          </div>
        )}
      </div>
    </div>
  );
}
export default LoginPage;
