import { useContext, useEffect, useState } from "react";
import { FormInput } from "./FormInput/FormInput";
import styles from "./IpAddressTracker.module.css"
import { ApiContext } from "../../../context/ApiContext";

export const IpAddressTracker = () => {

  const {isEmpty, setStatus,status,ipDetails} = useContext(ApiContext)
  useEffect(()=>{
    setStatus(false)
    if(isEmpty(ipDetails)){
      return
    }
    setStatus(true)
    console.log(ipDetails)
  },[ipDetails])
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.mainTitle}>IP Address Tracker</h1>
      <FormInput />
      <section className={styles.details}>
        <div>
          <h5>IP ADDRESS</h5>
          <p>{ipDetails.ip ? ipDetails.ip:'--'}</p>
        </div>
        <div>
          <h5>LOCATION</h5>
          <p>{ipDetails.ip ? ipDetails.ip:'--'}</p>
        </div>
        <div>
          <h5>TIMEZONE</h5>
          <p>{ipDetails.location ? ipDetails.location.timezone:'--'}</p>
        </div>
        <div>
          <h5>ISP</h5>
          <p>{ipDetails.isp ? ipDetails.isp:'--'}</p>
        </div>
      </section>
    </main>
  );
};

//LOS CÓDIGOS DE ERROR  VIENEN en .code y .messages
