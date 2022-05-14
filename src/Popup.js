import React from "react"
import ProductInfo from "./ProductInfo"

function Popup (props) {
    console.log(`CONTENT: `, props.item)
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>X</span>
                <ProductInfo key={props.item.id} product={props.item}/>
            </div>
        </div>
    )
}
export default Popup

