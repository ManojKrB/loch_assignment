import { useMemo, useState } from "react";
import styles from "./SignupContainer.module.css";

const SignupContainer = () => {
  const [email, setEmail] = useState("");
  const isInvalid = useMemo(() => {
    if (email.length === 0) {
      return false;
    }
    return !(email.includes("@") && email.includes("."));
  }, [email]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.signupContainer}>
          <span className={styles.signupText}>
            Sign up for exclusive access
          </span>
        </div>
        <form action="https://app.loch.one/welcome">
          <div className={styles.inputOuterContainer}>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={styles.inputContainer}
              placeholder="Your email address"
            />
          </div>
          {isInvalid && (
            <span className={styles.errorMessage}>
              Please enter a valid email
            </span>
          )}
          <div className={styles.getStartedButtonContainer}>
            <button className={styles.getStartedButton} type="submit">
              <span className={styles.getStartedButtonText}>Get started</span>
            </button>
          </div>
        </form>
      </div>

      <div className={styles.helperTextContainer}>
        <span className={styles.helperText}>
          You’ll receive an email with an invite link to join.
        </span>
      </div>
    </div>
  );
};

export default SignupContainer;
