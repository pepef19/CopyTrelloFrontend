import React, {useEffect, useState} from "react";
import '../BoardComponent.css';
import {CardContainer} from "../Card/CardContainer";
import ListModal from "./ListModal";
import Api from "../../../api";

export const ListWrapper = (props) => {

    const {list, setRefresh, board, orderingControl} = props;

    const [addCard, setAddCard] = useState({description: ""}) //innecesario utilizar objeto si solo hay un valor - cambiar
    const [ordering, setOrdering] = React.useState(0)
    const [numberOfLists, setNumberOfLists] = React.useState(0)

    const handleChange = (key, newValue) => {
        setAddCard({...addCard, [key]: newValue})
    }

    useEffect(() => {
        Api.fetchResource("cards_order", {}, undefined, {"list_id": list.id})
            .then(response => {
                setOrdering(response)
            })
            .catch(error => console.log(error));
    }, [])

    const handleOnClickSubmit = () => {
        Api.fetchResource("card", {
            "method": "POST",
            "body": {
                "description": addCard.description,
                "list_id": list.id,
                "ordering": ordering + 1
            }
        }).then((response) => {
                if(response.ok) {
                    setOrdering(ordering + 1)
                    return response.json()
                }
                throw response;
            }).then(response => {
                setRefresh(false);
                setAddCard({...addCard, description: ""})
        })
    }

    useEffect(() => {
        Api.fetchResource("existing_lists", {}, undefined, {"board_id": board.id})
            .then(response => {
                setNumberOfLists(response)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="list-wrapper">
            <div className="list-content">
                <div className="list-content-header">
                    <div className="list-header" >{list.title}</div>
                    {list && (<ListModal list={list} board={board} setRefresh={setRefresh} position={list.ordering} orderingControl={orderingControl} />)}
                </div>
                {list && list.cards.map(card => <CardContainer card={card} setRefresh={setRefresh} />)}
                <div className="card-composer-container">

                    <input className="open-card-composer"
                           id="card-create-input"
                           placeholder="Add card"
                           value={addCard.description}
                           onChange={event => handleChange("description", event.target.value)}/>

                    <button type="submit"
                            className="submit-button-card"
                            value="Add card"
                            onClick={handleOnClickSubmit} >Add card</button>
                </div>
            </div>
        </div>
    )
}