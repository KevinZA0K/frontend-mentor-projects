import React, { useContext } from 'react'
import styles from "./Filters.module.css"
import { FilterContext } from '../../../context/FilterContext'

export default function Filters() {
  
  const {filter,setFilter} = useContext(FilterContext)
  
  function handleChange(e){
    const id = e.target.id
    const value = e.target.value
    setFilter({
      ...filter,
      [id]:value
    })
  }

  return (
    <section className={styles.filters}>
        <input type='text' placeholder='Search for a country' className={styles.searchCountry} onChange={(e)=> handleChange(e)} id="text"/>
        <select name='region' id="region" className={styles.filterRegion} onChange={(e)=> handleChange(e)}>
            <option value="all">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </section>
  )
}
