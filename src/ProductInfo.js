import React from "react"

function ProductInfo (props) {
    return (
        <div>
            <p> {props.product.price.toLocaleString("en-UK", { style: "currency", currency: "GBP" })}</p>
            <h5> {props.product.description}</h5>
        </div>
    )
}
export default ProductInfo
