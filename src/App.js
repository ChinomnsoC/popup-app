import React from 'react'
import productsData from "./vschoolProducts"
import Popup from './Popup'
import { useState } from 'react';

import './App.css'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [product, setProduct] = useState(productsData[0])
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }
  const getProduct = (id) => {
    const productObj = productsData.find(info => info.id===id)
    setProduct(productObj)
  }
  return (
      <div >
        <div className="navbar">
        <p>Products On Sale</p>
        </div>
        {productsData.map(good => <div key={good.id}>
          <button onClick={() =>  {
            //getProduct(good.id)
            setProduct(good)
            togglePopup()
          }}> {good.name}</button> </div>)}
        {isPopupOpen && <Popup item={product} handleClose={togglePopup}/>}
        
        
        
          
      </div>
  )
}

export default App

