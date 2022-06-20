import React from 'react'
import { Link } from 'react-router-dom'


const Cart = (props) => {
    const { cart, deleteItem, spin, productcart, deleteProduct, inForClick } = props
    return (
        <>
            <section>
                <div className='container'>
                    <div className='productItem'>
                        {spin === true ?
                            <div className="loader"></div>
                            :
                            cart.map((element, index) => {
                                return <>
                                    <div className='item'>
                                        <div>
                                            <img width={200} height={200} key={index} src={element.strMealThumb} alt='' />
                                        </div>
                                        <p key={index}>{element.strMeal}</p>
                                        <button onClick={() => deleteItem(element.idMeal)} className='btn' type="submit">Удалить из карзинку</button>
                                    </div>
                                </>
                            })}
                        {spin === true ?
                            <div className="loader"></div>
                            :
                            productcart.map((element, index) => {
                                return <>
                                    <div className='item'>
                                        <div>
                                            <img width={200} height={200} key={index} src={element.strMealThumb} alt='' />
                                        </div>
                                        <Link to="/information" className='link' > <p onClick={() => inForClick(element.idMeal)} key={index}>{element.strMeal}</p></Link>
                                        <button onClick={() => deleteProduct(element.idMeal)} className='btn' type="submit">Удалить из карзинку</button>
                                    </div>
                                </>
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;