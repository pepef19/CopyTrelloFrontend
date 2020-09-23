import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import BoardHeader from "../BoardHeader/BoardHeader";
import {ListWrapper} from "../List/ListWrapper";
import {AddList} from "../List/AddList";
import '../BoardComponent.css';
import Api from "../../../api";


const RenderBoard = (props) => {

    const {match} = props

    const id = match.params.id;

    const [board, setBoard] = useState(undefined);
    const [refresh, setRefresh] = useState(false);
    const [dataFromLists, setDataFromLists] = useState(undefined);

    useEffect(() => {
        if(!refresh) {
            Api.fetchResource("boardata", {}, id)
                .then(response => {
                    setBoard(response);
                    setRefresh(true);
                })
                .catch(error => console.log(error));
            }
        }, [refresh])

    useEffect(() => {
        let ordering //se la vamos a pasar al hijo como un callback porque como props al cambiarla no cambiaria en padre, es la forma de comunicarnos de abajo hacia arriba
        if(board && board.lists) {
            ordering = board.lists.map(list => ({id: list.id, ordering: list.ordering}))
            setDataFromLists(ordering);
        }
    }, [board]);

    const orderingControl = (id, newPosition) => {

        dataFromLists.map((list, index) => {
            if (list.id === id) {
                dataFromLists[index].ordering = parseInt(newPosition, 10)
            } else if (list.ordering <= newPosition) {
                dataFromLists[index].ordering = list.ordering - 1;
            }
        })
        console.log(id, newPosition)
        //hacer un fetch y un endpoint que va a recibir un put que hara un foreach sobre el array que paso haciendo un update con el ordering que viene en el objeto que paso por el post
    }

    return (
        <div >
            <Navbar setRefresh={setRefresh} />
            <BoardHeader />
            <div id="board" className="render-board-screen">
                {board && board.lists.map(list => <ListWrapper list={list} setRefresh={setRefresh} board={board.board} orderingControl={orderingControl} />)}
                {board && <AddList board={board.board} setRefresh={setRefresh}/>}
            </div>
        </div>
    );
}
export default RenderBoard;