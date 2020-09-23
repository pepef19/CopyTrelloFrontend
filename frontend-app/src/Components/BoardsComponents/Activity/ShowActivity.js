import React, {useEffect, useState} from "react";
import './ActivityStyles.css';
import Api from "../../../api";

export const ShowActivity = (props) => {

    const {id} = props;

    const [refreshCard, setRefreshCard] = React.useState(false);
    const [renderActivities, setRenderActivities] = React.useState([]); //con esto evito hacer el primer render en undefinded
    const [addActivity, setAddActivity] = useState({text: ""});
    const [ordering, setOrdering] = React.useState(0)

    const handleChange = (key, newValue) => {
        setAddActivity({...addActivity, [key]: newValue})
    }

    useEffect(() => {
        Api.fetchResource("activities_order", {}, id, {"card_id": id})
          .then(response => {
                setOrdering(response)
            })
           .catch(error => console.log(error));
    }, [])

    const handleOnClickSubmit = () => {
        Api.fetchResource("card_activity", {
            "method": "POST",
            "body": {
                "text": addActivity.text,
                "card_id": id,
                "ordering": ordering + 1
        }
        }).then((response) => {
                if (response.ok) {
                    setOrdering(ordering + 1)
                    return response.json();
                }
                throw response;
            }).then(response => {
            setAddActivity({text: ""})
            setRefreshCard(false);
        })
    }

    useEffect(() => {
        if(!refreshCard) {
            Api.fetchResource("card_activity", {}, id)
                .then(response => {
                    if (response.length > 0) {
                        setRenderActivities(response);
                    }
                    setRefreshCard(true);
                })
                .catch(error => console.log(error));
        }
    }, [refreshCard])

    return (
        <div >
            <div className="list-composer-container-activity">
                <input className="open-list-composer-activity"
                       placeholder="Add activity"
                       value={addActivity.text}
                       onChange={event => handleChange("text", event.target.value)}/>

                <button type="submit"
                        className="submit-button-item"
                        value="Add activity"
                        onClick={handleOnClickSubmit} >Add Activity</button>
            </div>

            {renderActivities.map((activity) => <li className="show-activities-display" >{activity.text}</li>)}
            <br/>
        </div>

    )

}