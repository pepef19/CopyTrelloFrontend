import React from 'react'
import './InfoView.css'
import infoViewImg from '../../../img/infoView.JPG'

const InfoView = props => {
    return(
        <div className={"info-view-box container"}>
            <img src={infoViewImg} alt="infoView"/>
            <div className={"info-view-right"}>
                <h3>Información de un vistazo</h3>
                <p>Profundice en los detalles añadiendo comentarios, archivos adjuntos, fechas de vencimiento y mucho más directamente en las tarjetas de Trello. Colabore en los proyectos de principio a fin.</p>
            </div>
        </div>
    )
}

export default InfoView;