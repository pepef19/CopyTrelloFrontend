import React, {useEffect, useState} from 'react'
import './RecentlyViews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import BoardPreView from "../BoardPreView/BoardPreView";

const RecentlyViews = props => {

    const {recentlyBoards} = props

    return(
        <div className={"recently-views-box"}>
            <div className={"recently-view-title"}>
                <FontAwesomeIcon className={"clock-icon"} icon={faClock} />
                <h4>Visto recientemente</h4>
            </div>
            <div className={"recently-boards"}>
                <div className={"boards-pre-view"}>
                    {recentlyBoards.map(data => {
                        return (
                            <BoardPreView name={data.boardName} owner={data.owner}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecentlyViews;