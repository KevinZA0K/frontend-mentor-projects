import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.mainNav}>
    <NavLink to='/' className={styles.mainLogo}>Where in the world?</NavLink>
    <button className={styles.toggleTheme}>Hi!</button>
  </nav>
  )
}
