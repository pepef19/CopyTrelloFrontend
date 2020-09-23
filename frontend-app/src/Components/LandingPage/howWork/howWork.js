import React from 'react'
import './howWork.css'
import howWorkImg from '../../../img/howWork.JPG'

const HowWork = props => {
    return(
        <div className={"container"}>
            <div className={"how-work-text"}>
                <h3>Descubra cómo funciona</h3>
                <p>Pase de las ideas a los actos en segundos con los sencillos e intuitivos tableros, listas y tarjetas de Trello.</p>
            </div>
            <div className={"how-work-img-box"}>
                <button>></button>
                <img src={howWorkImg} alt="howWorkImg"/>
                <button>></button>
            </div>

        </div>
    )
}

export default HowWork;