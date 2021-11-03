import { useContext } from "react"

import { AuthContext } from "../../contexts/auth"

import styles from "./styles.module.scss";

export function SendMessageForm() { 
  
  const {user} = useContext(AuthContext);

  return(
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        
      </button>
    </div>
  )
}