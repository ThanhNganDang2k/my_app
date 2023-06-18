import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";  

const Cart = ({cartItem, addToCart, decreaseQty}) => {
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
    <section className='cart-items'>
      <div className='container d_flex'>
        {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

        <div className='cart-details'>
          {cartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
  

   {cartItem.map((item) => {
    const productQty = item.price * item.qty;
    return (
      <div className="cart-list product d_flex">
        <div className="img">
          <img src={item.cover} alt=''></img>
        </div>
        <div className="cart-details">
          <h3>{item.name}</h3>
          <h4>
            Đơn giá: {item.price} <br></br>
            Số lượng: {item.qty} 
         <span>Tổng: {productQty} đ</span>
          </h4>
        </div>
        <div className="cart-items-function">
          <div className="removeCart">
            {/* <button className="removeCart" > */}
              {/* <i className="fa -solid fa-xmark"></i> */}
              <a className="removeCart">x</a>
            {/* </button> */}
          </div>
          <div className="cartControl d_flex">
            <button className="incCart" onClick={() => addToCart(item)}>
            <i className="fa fa-plus"></i>
            </button>
            <button className="desCart" onClick={() => decreaseQty(item)}>
            <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="cart-item-price">

        </div>
      </div>
    )
   })}
    </div>
   <div className="cart-total product">
    <h2>Cart Summary</h2>
    <div className="d_flex">
      <h4>Total Price:</h4>
      <h3>{totalPrice} đ</h3>
    </div>
    <div className="btn-cart">
    <div className="d_flex">
    <Link to='/place'>
    <button>Đặt hàng</button>
      </Link>
      <Link to='/'>
        <p>Bạn muốn tiếp tục mua sắm?</p>
      </Link>
    </div>
      
    
   </div>

   </div>
   
   </div>
    </section>
    </>
  )
}

export default Cart
