import React from 'react'

const CartItem = ({id,img,title,price,amount}) => {
  return (
    <article className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            {/* remove button */}
            <button className="remove-btn">remove</button>
        </div>
        <div>
            {/* increase amount */}
            <button className="amount-btn">
                <ChevronUp />
            </button>
        </div>
    </article>
  )
}

export default CartItem