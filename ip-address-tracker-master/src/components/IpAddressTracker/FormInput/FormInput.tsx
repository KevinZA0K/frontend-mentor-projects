import styles from "../IpAddressTracker.module.css"

export const FormInput = () => {
  return (
    <form className={styles.formInput}>
        <input type="text" placeholder="Search for any IP address or domain"></input>
        <input type="submit" value=">"/>
      </form>
)
}
