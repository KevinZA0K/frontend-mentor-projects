import { FormInput } from "./FormInput/FormInput";
import styles from "./IpAddressTracker.module.css"


export const IpAddressTracker = () => {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.mainTitle}>IP Address Tracker</h1>
      <FormInput />
      <section className={styles.details}>
        <div>
          <h5>IP ADDRESS</h5>
          <p>192.212.174.101</p>
        </div>
        <div>
          <h5>LOCATION</h5>
          <p>Brooklyn, NY 10001</p>
        </div>
        <div>
          <h5>TIMEZONE</h5>
          <p>UTC-05:00</p>
        </div>
        <div>
          <h5>ISP</h5>
          <p>SpaceX Starlink</p>
        </div>
      </section>
    </main>
  );
};
