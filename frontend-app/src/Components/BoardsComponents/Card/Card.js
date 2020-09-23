import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {ShowActivity} from "../Activity/ShowActivity";
import './CardStyles.css';

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
        position: 'fixed',
        width: 400,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 0,
    },
}));

export default function Card (props) {

    const {id, description} = props

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div onClick={handleOpen}>
            <div className="list-card" onClick={handleOpen} >{description}</div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

            <div style={modalStyle} className={classes.paper}>
                <text className="card-modal-title" >{description}</text>
                <br/>
                <br/>
                <p className="Activity-heading-card-modal" >List of activities</p>
                <br/>
                <ShowActivity id={id}/>
            </div>

            </Modal>
        </div>
    );
}