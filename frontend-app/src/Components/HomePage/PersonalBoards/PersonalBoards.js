import React from 'react'
import './PersonalBoards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import BoardPreView from "../BoardPreView/BoardPreView";

const PersonalBoards = props => {

    const {personalBoards} = props

    return(
        <div className={"personal-boards-box"}>
            <div className={"personal-board-title"}>
                <FontAwesomeIcon className={"user-icon"} icon={faUser} />
                <h4>Tableros personales</h4>
            </div>
            <div className={"personal-boards"}>
                <div className={"boards-personal"}>
                    {personalBoards.map(data => {
                        return(
                            <BoardPreView name={data.title} owner={data.owner} id={data.id}/>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default PersonalBoards;