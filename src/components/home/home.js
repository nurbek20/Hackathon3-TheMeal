import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Home = (props) => {
  const { setProductitem, addToCart, data, setData, val, setVal, spin, inForClick } = props
  const [random, setRandom] = useState([])
  let a = ['a', 'b', 'c', 'd', 'e', 'f'];
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${a[Math.floor(a.length * Math.random())]}`)
      .then((res => {
        console.log("random meealls>>", res)
        setRandom(res.data.meals)
      }))
  }, [])

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res => {
        console.log(res.data.categories);
        setData(res.data.categories);
      }))
  }, [])


  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((res => {
        setVal(res.data.meals)
        console.log("random meals>>", res)
      }))
  }, [])

  const producktClick = (element) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${element}`)
      .then((res => {
        setProductitem(res.data.meals)
        console.log("products>>", res)
      }))
  }


  return (

    <div>
      <main id="main">
        <div className='container'>
          <div className='main__content'>
            <div>
              <img width={200} src="https://www.pngarts.com/files/3/Food-PNG-Download-Image.png" alt="" />
            </div>
            <div className='main__text'>
              <h1>Welcome to TheMealDB</h1>
              <br />
              <br />
              <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
              <p>Click to Support $2 per month (cancel anytime)
                Currently 750 supporters</p>
            </div>
            <div>
              <img width={200} src="https://www.pngarts.com/files/3/Food-PNG-Download-Image.png" alt="" />

            </div>
          </div>
        </div>
      </main>

      <section id="section">
        <div className='container'>
          <div className='section__border'>
            <div className='section__meals'>
              <div>
                <input placeholder='Search for a Meal...' type="text"></input>
              </div>
              <div><button type='submit'>Поиск</button> </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section__card'>
        <div className='container'>
          <h2 className='text'>Category Ingredients</h2>
          <div className='section__card' >
            {spin === true ?
              <div className="loader"></div>
              :
              data.map((element, index) => {
                return (
                  <>
                    <div className='section__meal__card'>
                      <Link className='card__text' to="/products__item">
                        <div>
                          <img key={index} width={250} height={200} src={element.strCategoryThumb} alt="" />
                        </div>
                        <p className='section__card__text' onClick={() => producktClick(element.strCategory)}>{element.strCategory}</p></Link>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>



      <section>
        <div className='container'>
          <h2 className='text'>Latest Meals</h2>
          <div className='random__card'>
            {spin === true ?
              <div className="loader"></div>
              :
              val.map((element) => {
                return (
                  <>
                    <div className='random__mealCard'>
                      <Link className='link' to="/information">
                        <div>
                          <img width={250} height={250} src={element.strMealThumb} alt="" />
                        </div>
                        <p className='section__card__text' onClick={()=>inForClick(element.idMeal)}>{element.strMeal}</p></Link>
                      <button className='btn' onClick={() => addToCart(element.idMeal)}>Дабавить Карзинку</button>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h2 className='text'>Random Meals</h2>
          <div className='section__card'>
            {spin === true ?
              <div className="loader"></div>
              :
              random.map((item, id) => {
                return (
                  <>
                    <div className='section__meal__card'>
                      <div>
                        <img key={id} width={250} height={200} src={item.strMealThumb} alt="" />
                      </div>
                     <Link to="/information" className='link'> <p className='section__card__text'  onClick={()=>inForClick(item.idMeal)}>{item.strMeal}</p></Link>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;