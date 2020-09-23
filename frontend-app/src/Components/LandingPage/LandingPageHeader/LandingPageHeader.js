import React from 'react'
import './LandingPageHeader.css'
import trello from '../../../img/trello.jpg'
import {Link} from 'react-router-dom';

const LandingPageHeader = props =>{
    return(
            <div className={"landing-header"}>
                <img src={trello} alt="trello"/>
                <div className={"landing-buttons-box"}>
                    <Link to={'/login'} className={"landing-page-header-btn"}><a >Iniciar sesión</a></Link>
                    <Link to={'/signup'} className={"landing-page-header-btn"}><a >Registrarse</a></Link>
                </div>
            </div>
    )
}

export default LandingPageHeader;