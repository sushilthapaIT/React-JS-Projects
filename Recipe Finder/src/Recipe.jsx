import React, {useState, useEffect} from "react"

const Recipe = () => {

    const API_KEY = `84ef363e4ed761516da1757317405c46`
    const APP_ID = `96c3ef34`

    useEffect(() => {
        console.log("cmissed me")
    })
    let URL = `https://api.edumam.com/search?q=chicken&app_id=${APP_ID}&app_key${API_KEY}`

    return(
        <>
            <h3>I am recipe</h3>
        </>
    );
}

export default Recipe