import React from 'react'
import './RobotView.css'
import robotImg from '../../../img/robot.JPG'

const RobotView = props => {
    return(
        <div className={"robot-view-box container"}>
            <div className={"robot-view-left"}>
                <h3>Automatización integrada de flujos de trabajo con Butler</h3>
                <p>¡Deje que los robots hagan el trabajo! Impulse la productividad dando rienda suelta al poder de la automatización en todo su equipo con Butler y elimine esas tareas que tan poco le gustan de sus listas de cosas por hacer con:</p>
                <ul>
                    <li>Desencadenadores basados en reglas</li>
                    <li>Botones personalizados en tarjetas y tableros</li>
                    <li>Comandos de calendario</li>
                    <li>Comandos de fecha de vencimiento</li>
                </ul>
            </div>
            <img src={robotImg} alt="robotImg"/>
        </div>
    )
}

export default RobotView;