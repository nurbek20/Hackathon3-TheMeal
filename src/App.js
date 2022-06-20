import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import axios from 'axios'
import Home from './components/home';
import Login from "./components/auth/login";
import Header from "./components/header";
import Register from './components/auth/register';
import services from './server/services';
import Cookies from 'js-cookie'
import Products from './components/products'
import ProductsItem from './components/products-item'
import Cart from './components/cart'
import Information from "./components/information";


const App = () => {
  const [data, setData] = useState([])
  const [val, setVal] = useState([])
  const [search, setSearch] = useState([])
  const [state, setState] = useState([])
  const [product, setProduct] = useState([])
  const [productitem, setProductitem] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const lenght = cart.length
  const [spin, setSpin] = useState(false)
  const [user, setUser] = useState('')
  const [infor, setInfor] = useState([])




  useEffect(() => {
    getMe()
  }, [])

  const getMe = async () => {
    await services.getMe().then(res => {
      // console.log('get me ', res)
      setUser(res.data.firstName)
    })
  }
  const logout = () => {
    setUser('')
    Cookies.remove('token')
  }

  // console.log("user>>", user)

  const deleteItem = (element) => {
    const check = [...cart.filter((index) => index.idMeal !== element)]
    if (check) {
      alert("Товар удаленно")
    }
    setCart([
      ...cart.filter((index) => index.idMeal !== element)
    ])

  }


  const addToCart = (element) => {
    // console.log("cart >>>", element)
    const check = state.find(elem => elem.idMeal === element)
    if (check) {
      alert("Товар добавлено")
    }
    const elem = state.find(elem => elem.idMeal === element)
    const newArr = [...cart, elem]
    localStorage.setItem('cart', JSON.stringify(newArr))
    setCart(newArr)
  }

 
  const inForClick = (item) => {
    // console.log("inForClick>>>  ", item)
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`)
      .then((number => {
        // console.log("number>>>", number)
        setInfor(number.data.meals)
      }))
  }

  return (
    <>
      <Header
        lenght={lenght}
        logout={logout}
        user={user}
        setSearch={setSearch}
        search={search}
        setState={setState}

      />
      <Routes>
        <Route path="/" element={<Home
          addToCart={addToCart}
          setProduct={setProduct}
          setProductitem={setProductitem}
          data={data}
          setData={setData}
          val={val}
          setVal={setVal}
          spin={spin}
          inForClick={inForClick}
        />} />
        <Route path="/login" element={<Login getMe={getMe} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products
          inForClick={inForClick}
          spin={spin}
          state={state}
          product={product}
          addToCart={addToCart}
        />} />
        <Route path="/products__item" element={<ProductsItem
          inForClick={inForClick}
          productitem={productitem}
          spin={spin}
        />} />
        <Route path="/cart" element={<Cart
          inForClick={inForClick}
          cart={cart}
          deleteItem={deleteItem}
          spin={spin}
        />} />
        <Route path="/information" element={<Information
          infor={infor}
          spin={spin}
        />} />
      </Routes>
      {/* {user} */}
    </>
  )
}

export default App;
