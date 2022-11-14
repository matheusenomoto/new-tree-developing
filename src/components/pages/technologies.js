import './technologies.css'
import React from "react";
import technologies from '../img/appimages';


function Technologies(){

    return(

        <div class='main-portfolio'>
            <div class='portfolio-introduction'>
                <h3>Conheça as tecnologias que utilizamos em nossos desenvolvimentos</h3>
            </div>
            <div class='technologies-portfolio-single'>
                    <img class='technologies-portfolio-single-img'src={technologies}/>
            </div>
        </div>

    )
}

export default Technologies;