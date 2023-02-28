import React from "react";
import Band from './Band'
import data from './metal.json'
import './BandList.css'

function BandList(){
    const bands = data.map(({ band_name, fans, formed, origin, split, style}, i) => {
    return (
        <Band
        id={i}
        key={band_name}
        name={band_name}
        fans={fans}
        formed={formed}
        origin={origin}
        split={split}
        style={style}
        />
    )
    })
    return (
        <div class='container'>
            <section class="BandList">{bands}</section>
        </div>
        
    )
}

export default BandList