import React, {useEffect, useState} from "react";
import '../BoardComponent.css';
import Api from "../../../api";

export const AddList = (props) => {

    const {board, setRefresh} = props;

    const [addList, setAddList] = useState({title: ""});
    const [ordering, setOrdering] = React.useState(0)

    const handleChange = (key, newValue) => {
        setAddList({...addList, [key]: newValue})
    }

    useEffect(() => {
        Api.fetchResource("lists_order", {}, undefined, {"board_id": board.id})
            .then(response => {
                setOrdering(response)
            })
            .catch(error => console.log(error));
    },[])

    const handleOnClickSubmit = () => {
        Api.fetchResource("list", {
            "method": "POST",
            "body": {
                "title": addList.title,
                "board_id": board.id,
                "ordering": ordering + 1
            }
        }).then((response) => {
                if(response.ok) {
                    setOrdering(ordering + 1)
                    return response.json();
                }
                throw response;
            }).then(response => {
                setRefresh(false);
                setAddList({...addList, title:""})
        })
    }

    return (
        <div className="list-composer-container">
            <input className="open-list-composer"
                   placeholder="Add list"
                   value={addList.title}
                   onChange={event => handleChange("title", event.target.value)}/>

            <button type="submit"
                    className="submit-button-item"
                    value="Add list"
                    onClick={handleOnClickSubmit} >Add List</button>
        </div>
    )
}