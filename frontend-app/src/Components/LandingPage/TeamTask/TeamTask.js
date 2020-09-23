import React from 'react'
import './TeamTask.css'
import workTeamImg from '../../../img/workTeam.jpg'

const TeamTask = props => {
    return(
        <div className={"team-task-box container"}>
            <div className={"team-task-left"}>
                <h3>Trabaje con cualquier equipo</h3>
                <p>Ya sea para un trabajo, un proyecto o incluso las próximas vacaciones en familia, Trello ayuda a tu equipo a permanecer organizado.</p>
                <button>Empiece a</button>
            </div>
            <img src={workTeamImg} alt="workTeam"/>
        </div>
    )
}

export default TeamTask;