import React from 'react'
import './LandingPageHeaderBottom.css'

const LandingPageHeaderBottom = props =>{
    return(
        <div className={"landing-page"}>
            <div className={"container"}>
                <div className={"landing-header-context"}>
                    <div className={"landing-header-context-left"}>
                        <h1>TRELLO LE PERMITE TRABAJAR DE FORMA MÁS COLABORATIVA Y SER MÁS PRODUCTIVO.</h1>
                        <p>Las tarjetas, listas y tableros de Trello le permiten organizar y priorizar sus proyectos de forma divertida, flexible y provechosa.</p>
                    </div>
                    <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="image"/>
                </div >
                <div className={"landing-header-context-down"}>
                    <input type="text" placeholder={"Coreo electrónico"}/>
                    <button>Regístrese. ¡Es gratis!</button>
                </div>

            </div>
        </div>
    )
}

export default LandingPageHeaderBottom;