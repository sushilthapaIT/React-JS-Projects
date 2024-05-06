import React, {useState, useEffect} from "react"

const MainRecipe = () => {

    const [ingredientsList, updateIngredientsList] = useState([]);

    const API_KEY = `84ef363e4ed761516da1757317405c46`
    const APP_ID = `96c3ef34`

    useEffect(() => {
        let URL = `https://api.edamam.com/api/recipes/v2/${APP_ID}?type=public&q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
        fetch(URL).then(response => {
            return response.json()
        }).then(res => {
            console.log(res.hits)
            updateIngredientsList(res.hits)
        }).catch(err => { 
            console.log(`error ${err}`)
        })
    }, []);


    return(
        <>
        <div className="App">
            <div className="App-header">
                <div className="Wrapper">
                    {ingredientsList.map((item, index) => {
                        return(
                            <div className="Ingredient">
                                <span>{item.recipe.label}</span>
                                <img src={item.recipe.image} />
                                {item.recipe.ingredientLines.map((step) => {
                                    return <p>{step}</p>
                                })}
                            </div>
                    )})}
                </div>
            </div>
        </div>
        </>
    );
}

export default MainRecipe