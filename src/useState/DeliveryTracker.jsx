import React, { useState } from 'react'

const DeliveryTracker = () => {
  let [Status, setStatus] = useState("Order Placed");
  let Statuses = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Delivered"
  ]
  let handleStatus = () => {
    setStatus((prevStatus) => {
      let currentIndex = Statuses.indexOf(prevStatus)
      if (currentIndex < Statuses.length - 1) {
        return Statuses[currentIndex+1]
      }
      return Statuses[currentIndex]
    })
  }
  return (
    <div>
      <h2>Current Status : {Status}</h2>
      {Status === "Delivered" && <p>Your order has been delivered!</p>}
      <button onClick={handleStatus} disabled={Status==="Delivered"}>{Status!="Delivered" ? "Update Status" : "Order Delivered"}</button>
    </div>
  )
}

export default DeliveryTracker