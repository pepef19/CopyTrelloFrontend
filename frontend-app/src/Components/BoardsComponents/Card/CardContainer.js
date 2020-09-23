import React from "react";
import '../BoardComponent.css';
import Card from "./Card";
import Api from "../../../api";

export const CardContainer = (props) => {

    const {card, setRefresh} = props;

    const handleDeleteCard = () => {
        Api.fetchResource("card", {
            method: "delete",
        })
            .then(() => {
                setRefresh(false)
            })
    }

    return (
        <div className="list-card-details" >
            <Card id={card.id} description={card.description} />
            <div onClick={handleDeleteCard} className="delete-card-button" >X</div>
        </div>
    )
}