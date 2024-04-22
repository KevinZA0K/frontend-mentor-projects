import { useCallback, useContext } from "react"
import styles from "../IpAddressTracker.module.css"
import { ApiContext } from "../../../../context/ApiContext"

export const FormInput = () => {

    const {fetchAPI,ipDetails} = useContext(ApiContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const ip = e.target.ip.value
        const array = ip.split(".")
        if(array.length != 4){
          throw new Error("NO ES UNA IP VALIDA")
        }
        fetchAPI(ip)
    }
  return (
    <>
    <form className={styles.formInput} onSubmit={(e)=>{
        handleSubmit(e)
    }}>
        <input type="text" id="ip" placeholder="Search for any IP address or domain"></input>
        <input type="submit" value=">"/>
      </form>
      {ipDetails.messages && <div className={styles.error}>{ipDetails.messages}</div>}
      </>
)
}
