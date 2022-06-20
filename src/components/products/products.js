import React from 'react'
import "./products.css"
import { Link } from 'react-router-dom'


const Products = (props) => {
  const { state, spin, inForClick, addToCart } = props
  console.log(state)
  return (
    <>
      <section>
        <div className='container'>
          <div className='products__card'>
            {spin === true ?
              <div className="loader"></div>
              :
              state.map((element, index) => {
                return (
                  <>
                    <div className='section__product__card'>
                      <div>
                        <img width={200} height={200} src={element.strMealThumb} alt="" />
                      </div>
                      <Link to="/information" className='link'><p onClick={() => inForClick(element.idMeal)}>{element.strMeal}</p></Link>
                      <button className='btn' onClick={() => addToCart(element.idMeal)}>Дабавить карзинку</button>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
      {/* <section>
        <div className='container'>
          <div className='products'>
            {
              product.map((item, id) => {
                return (
                  <>
                    <div className='section'>
                      <div>
                        <img key={id} width={200} height={200} src={item.strMealThumb} alt="" />
                      </div>
                      <p key={id}>{item.strMeal}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Products;