import React from 'react'
import './YourWayCard.css'

const YourWayCard = props => {

    const {img, title, text, buttonText} = props

    return(
        <div className={"your-way-card-box container"}>
            <div className={"your-way-card"}>
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <p>{text}</p>
                <button>{buttonText}</button>
            </div>
        </div>
    )
}

export default YourWayCard;