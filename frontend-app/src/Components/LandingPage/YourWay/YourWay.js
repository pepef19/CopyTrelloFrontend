import React from 'react'
import './YourWay.css'
import YourWayCard from "./YourWayCard/YourWayCard";
import EstrategiaEquipoImg from '../../../img/EstrategiaEquipo.png'
import PlataformaProductividadImg from '../../../img/plataformaProductividad.png'
import SiempreSincronizado from '../../../img/siempreSincronizado.png'

const YourWay = props => {
    return(
        <div className={"container"}>
            <div className={"your-way-box container"}>
                <div className={"your-way-center"}>
                    <h3>Trello a su manera</h3>
                    <p>Use Trello del modo que crea oportuno para aprovechar al máximo las virtudes de su equipo. Somos lo bastante flexibles y ofrecemos funcionalidades de sobra para ajustarnos al estilo y las necesidades de cada equipo.</p>
                </div>
            </div>
            <div className={"your-way-card-box"}>
                <YourWayCard img={EstrategiaEquipoImg} title={"Manual de estrategia del equipo"}
                             text={"No encontrará complicaciones a la hora de configurar y poner a todo su equipo a trabajar con Trello. Hemos reunido todos los tableros y herramientas que necesita para lograr el éxito en un práctico recurso."}
                             buttonText={"Trace un plan de juego"}/>
                <YourWayCard img={PlataformaProductividadImg} title={"Una plataforma de productividad\n"}
                             text={"Integre directamente en su flujo de trabajo las aplicaciones que su equipo ya utiliza. Los Power-Up convierten los tableros de Trello en aplicaciones vivas para cumplir con las necesidades particulares de su equipo."}
                             buttonText={"Impulse su flujo de trabajo"}/>
                <YourWayCard img={SiempreSincronizado} title={"Siempre sincronizado\n"}
                             text={"Trello permanece sincronizado en todos sus dispositivos allá donde esté. Colabore con su equipo desde cualquier lugar, ya sea en el autobús o en la playa."}
                             buttonText={"AppStore"}/>
            </div>
        </div>
    )
}

export default YourWay;