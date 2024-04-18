import React, { useState } from 'react'

export function useApi(){

    const [api,setApi] = useState({})
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => setApi(json));
      return api
}
