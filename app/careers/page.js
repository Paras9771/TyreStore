"use client"

import { useEffect } from "react"

const Page = () => {

  useEffect(() => {
    fetch("https://mstrain.agngarages.co.uk/apici/getTyreFilterData").then(result => result.json())
    .then(data => console.log(data.Speed))
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Page