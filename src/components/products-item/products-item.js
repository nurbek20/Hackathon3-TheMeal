import React from 'react'
import "./products-item.css"
import {Link} from 'react-router-dom'

const ProductsItem = (props) => {
    const { productitem, spin, adddToCart, inForClick } = props

    return (
        <>
            <section id='product__section'>
                <div className='container'>
                    <div className='productItem'>
                        {spin === true ?
                            <div className="loader"></div>
                            :
                            productitem.map((item, i) => {
                                return (
                                    <>
                                        <div className='item'>
                                            <div>
                                                <img width={200} height={200} key={i} src={item.strMealThumb} alt='' />
                                            </div>
                                            <Link className='link' to="/information">
                                                <p onClick={() => inForClick(item.idMeal)} key={i}>{item.strMeal}</p>
                                            </Link>

                                            <button className='btn' onClick={() => adddToCart(item.idMeal)}>Дабавить карзинку</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsItem;