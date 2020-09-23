import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {useHistory} from 'react-router-dom';
import Api from "../../api";

function getModalStyle() {
    const top = 20
    const left = 45

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 0,
    },
}));

export default function BoardModal(props) {

    const {id, setRefresh, open, handleClose} = props

    const history = useHistory();

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [addBoard, setAddBoard] = React.useState({title: ""})
    const [ordering, setOrdering] = React.useState(0)

    const handleChange = (key, newValue) => {
        setAddBoard({...addBoard, [key]: newValue})
    }

    useEffect(() => {
        Api.fetchResource("boards_order", {}, id, {"user_id": id})
            .then(response => {
                setOrdering(response);
        }).catch(error => console.log(error));
    }, [])

    const handleOnClickSubmit = () => {
        Api.fetchResource("board", {
            "method": "POST",
            "body": {
                "title": addBoard.title,
                "user_id": id,
                "ordering": ordering + 1
            }
        }).then((response) => {
                if(response.ok) {
                    setOrdering(ordering + 1)
                    return response.json();
                }
                throw response;
            }).then(response => {
                history.push(`/board/${response.id}`)
        })
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>

            <textarea autoFocus={true}
                      placeholder="Add board"
                      value={addBoard.title}
                      onChange={event => handleChange("title", event.target.value)}>Add new Board</textarea>

            <button type="submit"
                    className="#"
                    value="Add board"
                    onClick={handleOnClickSubmit}>Add board</button>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableBackdropClick={true}
            >
                {body}
            </Modal>
        </div>
    );
}