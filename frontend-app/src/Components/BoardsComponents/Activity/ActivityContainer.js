import React from "react";
import '../BoardComponent.css';

export const ActivityContainer = (props) => {

    const {activity} = props;

    return (
        <div className="list-card-details" >
            {activity}
        </div>
    )
}