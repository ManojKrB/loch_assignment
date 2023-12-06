import styles from "./TestimonialCard.module.css";

const TestimonialCard = (props: any) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.details}>
        <div className={styles.username}>{props.name}</div>
        <div className={styles.position}>{props.position}</div>
      </div>

      <div className={styles.description}>"{props.description}"</div>
    </div>
  );
};

export default TestimonialCard;
