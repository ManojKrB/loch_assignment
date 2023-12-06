import styles from "./ActionsContainer.module.css";
import NotificationCard from "./NotificationCard";
import bellIcon from "../assets/bell.png";
import bellBlack from "../assets/bellBlack.png";
import cohort from "../assets/Cohorts.png";
import vector from "../assets/Vector.png";
import barChart from "../assets/bar-chart-2.png";
import clock from "../assets/clock.png";
import eye from "../assets/Eye.png";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    name: "Jack F",
    position: "Ex Blackrock PM",
    description:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    position: "Research, 3poch Crypto Hedge Fund",
    description:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
  {
    name: "Shiv S",
    position: "Co-Founder Magik Labs",
    description:
      "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple",
  },
];

const notificationCardData = [
  {
    icon: bellBlack,
    checkbox: <div className={styles.saveText}>Save</div>,
    bodyTitle: (
      <div className={styles.bodyTitle1}>
        <div>We’ll be sending</div>
        <div>notifications to you </div>
        <div>here</div>
      </div>
    ),
    footer: (
      <div style={{ width: 190, marginTop: 20 }}>
        <input
          type="text"
          placeholder="manoj.bayyarapu@gmail.com"
          className={styles.footer1}
        />
      </div>
    ),
  },
  {
    icon: barChart,
    checkbox: (
      <div style={{}}>
        <input type="checkbox" checked />
      </div>
    ),
    bodyTitle: (
      <div className={styles.bodyTitle2}>
        <div>Notify me when any wallets</div>
        <div>move more than</div>
      </div>
    ),
    footer: (
      <div className={styles.footer2}>
        <select
          id="cars"
          name="cars"
          style={{ width: 66, background: "lightgrey" }}
        >
          <option value="volvo">{"$"} 500</option>
          <option value="saab">{"$"} 1000</option>
          <option value="fiat">{"$"} 2000</option>
          <option value="audi">{"$"} 5000</option>
        </select>
      </div>
    ),
  },
  {
    icon: clock,
    checkbox: (
      <div style={{}}>
        <input type="checkbox" checked />
      </div>
    ),
    bodyTitle: (
      <div>
        <div className={styles.bodyTitle3}>
          <div>Notify me when any</div>
          <div>wallet dormant for</div>
        </div>
        <div className={styles.body2Dropdown}>
          <select id="cars" name="cars" style={{ marginLeft: 10 }}>
            <option value="volvo">{">"}7 days</option>
            <option value="saab">{">"}15 days</option>
            <option value="fiat">{">"}30 days</option>
          </select>
        </div>
      </div>
    ),
    footer: <div className={styles.footer3}>becomes active</div>,
  },
];

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
