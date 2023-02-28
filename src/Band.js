import React from "react";
import { useState } from "react";
import './Band.css'

function Band(props){
    const [likes, setLikes] = useState(0)
    const {name, fans, formed, origin, split, style, id} = props
    const fanCount = (parseInt(fans)*1000).toLocaleString('en')
    const down = '👎'
    const up = '👍'
    if (split === '-'){
        return(
        <div className="Band" class="band">
            <h4 class="name">{name}</h4>
            <p>Origin: {origin} Fans: {fanCount}</p>
            <p>Formed: {formed} Split: {split}</p>
            <button type='button' onClick={(e) => setLikes(likes - 1)}>{down}</button>
            <label>{likes}</label>
            <button type='button' onClick={(e) => setLikes(likes + 1)}>{up}</button>
        </div>
    )
    }
    else{
        return(
        <div className="Band" class="band">
            <h4 class="name">{name}</h4>
            <p>Origin: {origin} Fans: {fans}</p>
            <p>Formed: {formed} Split: {split}</p>
        </div>
    )
    }
    
} 

export default Band