import styles from "./SignupContainer.module.css";

const SignupContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.signupContainer}>
          <span className={styles.signupText}>
            Sign up for exclusive access
          </span>
        </div>
        <div className={styles.inputOuterContainer}>
          <input
            className={styles.inputContainer}
            placeholder="Your email address"
          />
        </div>
        <div className={styles.getStartedButtonContainer}>
          <button className={styles.getStartedButton}>
            <span className={styles.getStartedButtonText}>Get started</span>
          </button>
        </div>
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
