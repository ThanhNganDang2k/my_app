
import './App.css';
import Header from "./common/header/Header"
// This is a React Router v5 app
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import { BrowserRouter as  } from "react-router-dom"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom"
import { Pages } from "./pages/Pages"
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Place from './common/place/place';
import { Home } from './components/mainpage/Home';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sdata from "./components/shops/Sdata"
import Footer from './common/footer/Footer'
import Login from './login/Login';
import Profile from "./components/profile/Profile";
import Sendemail from './components/send_email/Sendemail';
import Forgotpassword from './components/forgotpassword/Forgotpassword';



// import DataLogin from "./components/login/data"

// import { Switch } from "react-router";
function App() {
  // step 1: fetch 
  const {productItems} = Data;
  const { shopItems } = Sdata
  const [cartItem, setcartItem] = useState([])
  const [province, setProvince] = useState("")
  const [district, setDistrict] = useState("")


  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id )
    if (productExit) {
      setcartItem(cartItem.map((item) =>
      (item.id === product.id ? { ...productExit, qty:productExit.qty+1 } : item )))
    }else{
      setcartItem([ ...cartItem, {...product, qty: 1 }])
    }
  }

    // Stpe: 6
    const decreaseQty = (product) => {
      // if hamro product alredy cart xa bhane  find garna help garxa
      const productExit = cartItem.find((item) => item.id === product.id)
  
      // if product is exit and its qty is 1 then we will run a fun  setcartItem
      // inside  setcartItem we will run filter to check if item.id is match to product.id
      // if the item.id is doesnt match to product.id then that items are display in cart
      // else
      if (productExit.qty === 1) {
        setcartItem(cartItem.filter((item) => item.id !== product.id))
      } else {
        // if product is exit and qty  of that produt is not equal to 1
        // then will run function call setcartItem
        // inside setcartItem we will run map method
        // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
        setcartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
      }
    }

  return ( 
   <>
    <BrowserRouter>
    <Header cartItem={cartItem}></Header>
      <Routes>  
          {/* <Pages productItems={productItems} addToCart={addToCart} /> */}
          <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} 
          />
          <Route path='/auth/signin' element={<Login></Login>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/sendemail' element={<Sendemail></Sendemail>}></Route>
          <Route path='/forgotpassword' element={<Forgotpassword></Forgotpassword>}></Route>
          <Route path="/cart" exact element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} ></Route>
          <Route path="/place" element={<Place province={province} setProvince={setProvince}
          district={district} setDistrict={setDistrict}
          >

          </Place>} ></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>

       
   </>
  );
}


{/* <Router>
<Header cartItem={cartItem} />
<Switch>
  <Routes path='/' exact>
    <Pages productItems={productItems} addToCart={addToCart} />
  </Routes>
  <Routes path='/cart' exact>
    <Cart cartItem={cartItem} addToCart={addToCart} />
  </Routes>
</Switch>
{/* <Footer /> 
</Router> */}

export default App;
