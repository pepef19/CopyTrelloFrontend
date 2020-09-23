import React from 'react'
import './BoardPreView.css'
import {Link} from 'react-router-dom'

const BoardPreView = props => {

    const {name, owner, id} = props

    return(
        <Link to={`/board/${id}`}>
            <div className={"pre-board-view"}>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default BoardPreView;