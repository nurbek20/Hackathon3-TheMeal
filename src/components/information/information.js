import React from 'react'
import './information.css'

const Information = (props) => {
    const { infor, spin } = props
    return (
        <>
            <div className='section__info'>
                <div className='container'>
                    <div className='information__card'>
                        {spin === true ?
                            <div className="loader"></div>
                            :
                            infor.map((element, index) => {
                                return (
                                    <>
                                        <div className='information__box'>
                                            <div>
                                                <h2>{element.strMeal}</h2>
                                                <div className='box__card'>
                                                    <img width={350} height={400} src={element.strMealThumb} alt="" />
                                                </div>

                                            </div>
                                            <div>
                                                <h2>Ingredients</h2>
                                                <div className='information__card'>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient1}.png`} alt="" />
                                                        <p>{element.strMeasure1}</p>
                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient2}.png`} alt="" />
                                                        <p>{element.strMeasure2}</p>
                                                    </div>
                                                    1
                                                    11
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient3}.png`} alt="" />
                                                        <p>{element.strMeasure3}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient4}.png`} alt="" />
                                                        <p>{element.strMeasure4}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient5}.png`} alt="" />
                                                        <p>{element.strMeasure5}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient6}.png`} alt="" />
                                                        <p>{element.strMeasure6}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient7}.png`} alt="" />
                                                        <p>{element.strMeasure7}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient8}.png`} alt="" />
                                                        <p>{element.strMeasure8}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient9}.png`} alt="" />
                                                        <p>{element.strMeasure9}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient10}.png`} alt="" />
                                                        <p>{element.strMeasure10}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient11}.png`} alt="" />
                                                        <p>{element.strMeasure11}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient12}.png`} alt="" />
                                                        <p>{element.strMeasure12}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient13}.png`} alt="" />
                                                        <p>{element.strMeasure13}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient14}.png`} alt="" />
                                                        <p>{element.strMeasure14}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient15}.png`} alt="" />
                                                        <p>{element.strMeasure15}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient16}.png`} alt="" />
                                                        <p>{element.strMeasure16}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient17}.png`} alt="" />
                                                        <p>{element.strMeasure17}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient18}.png`} alt="" />
                                                        <p>{element.strMeasure18}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient19}.png`} alt="" />
                                                        <p>{element.strMeasure19}</p>

                                                    </div>
                                                    <div>
                                                        <img width={200} src={`https://www.themealdb.com/images/ingredients/${element.strIngredient20}.png`} alt="" />
                                                        <p>{element.strMeasure20}</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <h2>Instructions</h2>
                                        <p>{element.strInstructions}</p>
                                    </>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information