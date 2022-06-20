import React from 'react'
import './header.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useState } from 'react';

const Header = ({ 
    lenght,
    logout,
    setState,
    user,
    setSearch,
    search,
 }) => {

    const btnClick = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res => {
                setState(res.data.meals)
                console.log("data", res)
            }))
    }


    return (
        <>
            <nav>
                <div className='container'>
                    <div className='navbar'>
                        <div className='img'><Link className='link' to="/"><img width={50} src='http://img-fotki.yandex.ru/get/6729/196138903.84/0_bc993_5ffe2c6e_L.png' alt='TheMealDB'></img></Link>
                            <Link className='link' to="/"> <h3>TheMealDB</h3></Link>
                        </div>
                        <div className='navbar__list'>

                            <h2><Link className='link' to="/">Home</Link></h2>
                            <h2><Link className='link'to="/cart">Корзина{lenght}</Link> </h2>
                            <div className='navbar__input'>
                                <input className='inp'  onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' />
                                <Link to="/products">  <button className='inp1' onClick={()=>btnClick()} type="submit" value="Search">Search</button></Link>
                                {
                                    user ?
                                        <h2 onClick={logout}>{logout}</h2> :
                                        <>
                                            <Link to="/login"><button className='btnClik' type='submit'>Войти</button></Link>
                                            <Link to="/register"><button className='btnClik' type='submit'>Регистрация</button></Link>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;