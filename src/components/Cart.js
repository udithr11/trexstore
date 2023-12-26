import React from 'react'
import {CART_IMG} from "./utils/constants"

const Cart = () => {
  
  return (
    <div className="flex justify-center">
      <h1 className="underline items-center py-3 mx-2">Products</h1>
      <img src={CART_IMG} className="w-10 h-10 m-3"/>
    </div>
  )
}

export default Cart