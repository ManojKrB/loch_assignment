import styles from "./ActionsContainer.module.css";
import NotificationCard from "./NotificationCard";
import bellIcon from "../assets/bell.png";
import cohort from "../assets/Cohorts.png";
import vector from "../assets/Vector.png";
import eye from "../assets/Eye.png";
import TestimonialCard from "./TestimonialCard";
import { notificationCardData, testimonialData } from "../constants";

const ActionsContainer = () => {
  return (
    <div className={styles.container}>
      {/* NOTIFICATION CONTAINER */}
      <div className={styles.notificationOuterContainer}>
        <div className={styles.notificationLeftContainer}>
          <div className={styles.notificationDescriptionTopContainer}>
            <div className={styles.bellIconContainer}>
              <img src={bellIcon} />
            </div>
            <div className={styles.notificationTopDescription}>
              Get notified when a<br />
              highly correlated
              <br /> whale makes a move
            </div>
          </div>
          <div className={styles.notificationDescriptionBottomContainer}>
            Find out when a certain whale moves
            <br /> more than any preset amount on-chain or
            <br /> when a dormant whale you care about
            <br /> becomes active.
          </div>
        </div>
        <div className={styles.notificationRightContainer}>
          {notificationCardData &&
            notificationCardData?.map((item) => (
              <NotificationCard
                icon={item.icon}
                checkbox={item.checkbox}
                bodyTitle={item.bodyTitle}
                footer={item.footer}
              />
            ))}
        </div>
      </div>

      {/* DASHBOARD CONTAINER */}
      <div className={styles.dashboardContainer}>
        <div className={styles.cohortContainer}>
          <img src={cohort} className={styles.imageContainer} />
        </div>
        <div className={styles.dashboardTextContainer}>
          <div className={styles.dashboardTextTopContainer}>
            <div className={styles.eyeIconContainer}>
              <img src={eye} />
            </div>
            <div className={styles.dashboardDescription}>
              Watch what the <br /> whales are doing
            </div>
          </div>
          <div className={styles.dashboardTextBottomContainer}>
            All whales are not equal. Know exactly
            <br />
            what the whales impacting YOUR
            <br /> portfolio are doing
          </div>
        </div>
      </div>

      {/* TESTIMONIAL CONTAINER */}
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonials}>Testimonials</div>
        <hr className={styles.lineBreak} />
        <div className={styles.testimonialCardsAndIcon}>
          <div className={styles.testimonialIcon}>
            <img src={vector} />
          </div>
          <div className={styles.testimonialCardCarousal}>
            {testimonialData &&
              testimonialData?.map((item) => (
                <TestimonialCard
                  name={item?.name}
                  position={item?.position}
                  description={item?.description}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsContainer;
