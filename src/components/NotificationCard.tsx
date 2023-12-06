import styles from "./NotificationCard.module.css";

const NotificationCard = (props: any) => {
  return (
    <div className={styles.notificationCard}>
      <div className={styles.notificationCardHeader}>
        <div>
          <img src={props?.icon} className={styles.icon} />
        </div>
        <div className={styles.checkbox}>{props?.checkbox}</div>
      </div>
      <div className={styles.notificationCardBody}>{props.bodyTitle}</div>
      <div>{props?.footer}</div>
    </div>
  );
};

export default NotificationCard;
