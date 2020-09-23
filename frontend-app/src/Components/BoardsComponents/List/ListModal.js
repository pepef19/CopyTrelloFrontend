import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './ListComponent.css';
import Api from "../../../api";

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "relative",
        width: 304,
        height: 375,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 0,
    },
}));

export default function ListModal(props) {

    const {list, board, setRefresh, position, orderingControl} = props

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [numberOfLists, setNumberOfLists] = React.useState(undefined);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        Api.fetchResource("existing_lists", {}, undefined, {"board_id": board.id})
            .then(response => {
                setNumberOfLists(response)
            })
            .catch(error => console.log(error));
    }, [])

    const handleDeleteList = () => {
        Api.fetchResource("list", {
            method: "delete"
        })
            .then(response => {
                setRefresh(false)
                setOpen(false)
            })
    }

    const cardCreateRedirect = () => {
        handleClose();
        setTimeout(() => document.getElementById("card-create-input").focus(), 10)
    }

    const generateOption = (numberOfItems) => {
        let array = [];
        for (let i = 1; i <= numberOfItems; i++) {
            array.push(<option>{i}</option>)
        }
        return array;
    }

    const onChangeNewValue = (event) => {
        const currentPosition = position;
        const newPosition = event.target.value;
        if(currentPosition !== newPosition) {
            orderingControl(list.id, newPosition)
        }
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <option className="pop-up-title-option">List Actions</option>
            <ul className="pop-over-list">
                <li className="list-pop-up-option" >
                    <a onClick={cardCreateRedirect} className="list-pop-up-item" >Add Card...</a>
                </li>
                <li className="list-pop-up-option" >
                    <a className="list-pop-up-item" >Copy List...</a>
                </li>
                <li className="list-pop-up-option" >
                    <label >Move list...</label>
                    <select className="list-pop-up-item selector-pop-up-list"
                            onChange={onChangeNewValue} >
                        { generateOption(numberOfLists) }
                    </select>
                </li>
                <li className="list-pop-up-option" >
                    <a className="list-pop-up-item" >Watch</a>
                </li>
                <hr className="list-pop-up-hr" />

                <li className="list-pop-up-option" >
                    <a className="list-pop-up-item" >Sort By...</a>
                </li>
                <hr className="list-pop-up-hr" />

                <li className="list-pop-up-option" >
                    <a className="list-pop-up-item" >Move All Cards in This List...</a>
                </li>
                <li className="list-pop-up-option" >
                    <a className="list-pop-up-item" >Archive All Cards in This List...</a>
                </li>
                <hr className="list-pop-up-hr" />

                <li className="list-pop-up-option" onClick={handleDeleteList}>
                    <a className="list-pop-up-item" >Archive This List</a>
                </li>
            </ul>

        </div>
    );

    return (
        <div>
            <select type="button" onClick={handleOpen}>
            </select>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}