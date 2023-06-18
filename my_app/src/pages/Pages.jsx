import React from 'react'
import { Home } from '../components/mainpage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import NewArrival from '../components/newarrivals/NewArrival'
import Discount from '../components/discount/Discount'
import Shop from '../components/shops/Shop'
import Annocument from '../components/annocument/Annocument'
import Wrapper from '../components/wrapper/Wrapper'
export const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem}></Home>
      <FlashDeals productItems = {productItems} addToCart={addToCart}></FlashDeals>
      <TopCate></TopCate>
      <NewArrival></NewArrival>
      <Discount></Discount>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument></Annocument>
      <Wrapper></Wrapper>
    </>
  )
}
