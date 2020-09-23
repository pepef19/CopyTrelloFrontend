import React, {useState} from 'react'
import "./CreateModalIconPlus.css"
import CloseModalOnClickOutside from "./CloseModalOnClickOutside";
import BoardModal from "../BoardsComponents/BoardModal";

export const CreateModalIconPlus = ({showiconplus, closeModalHandler, setRefresh}) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/*<CloseModalOnClickOutside closeModalHandler={closeModalHandler} >*/}
                <div className="modal-wrapper"
                     style={{
                         opacity: showiconplus ? '1' : '0'
                     }}>
                    <header className="modal-header">
                        <h1 className="modal-title-navbar"> Create </h1>

                        <button className="button-close-modal" onClick={() => {console.log("onclick");closeModalHandler();}}> x
                            <span className="modal-close-container"> </span>
                        </button>
                    </header>
                    <div className="modal-content">
                        <div className="modal-body">
                            <ul className="modal-ul">
                                <button className="button-organization" type="button" onClick={handleOpen}>
                                    <span className="icon-organization"> <i className="icon-trello"/> </span>
                                    <span className="title-organization"> Create a Board </span>
                                    <p className="text-organization"> A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything. </p>
                                </button>
                                <button className="button-organization">
                                    <span className="icon-organization"> <i className="icon-users"/> </span>
                                    <span className="title-organization"> Create Team </span>
                                    <p className="text-organization"> A team is a group of boards and people. Use it to organize your company, side hustle, family, or fiends. </p>
                                </button>
                                <button className="button-organization">
                                    <span className="icon-organization"> <i className="icon-folder-open"/> </span>
                                    <span className="title-organization"> Create Business team </span>
                                    <p className="text-organization"> With a Business Class your team has more security, administrative controls, and unlimited Power-Ups. </p>
                                </button>
                            </ul>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            {/*</CloseModalOnClickOutside>*/}
            <BoardModal className="button-organization" setRefresh={setRefresh} open={open} setOpen={setOpen} handleClose={handleClose} />
        </div>
)
}

export default CreateModalIconPlus;