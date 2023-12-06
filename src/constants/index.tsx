import bellBlack from "../assets/bellBlack.png";
import barChart from "../assets/bar-chart-2.png";
import clock from "../assets/clock.png";
import styles from "./ActionsContainer.module.css";

export const testimonialData = [
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

export const notificationCardData = [
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
      <div>
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
          style={{ width: 66, background: "rgba(228.75, 229.02, 229.71, 0.5)" }}
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
