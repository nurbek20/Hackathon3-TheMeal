import React from 'react'
import "./products-item.css"


const ProductsItem = (props) => {
    const { productitem, spin,adddToCart } = props

    return (
        <>
            <section>
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
                                            <p key={i}>{item.strMeal}</p>
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