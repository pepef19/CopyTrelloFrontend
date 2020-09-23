import React, {useState} from 'react'
import "./CreateModalIconBell.css"
import {trelloguide} from "../../img/trelloguide.png"
import CloseModalOnClickOutside from "./CloseModalOnClickOutside";


export const CreateModalIconBell = ({showiconbell, closeModalHandler}) => {

    return (
        <CloseModalOnClickOutside closeModalHandler={closeModalHandler} >
            <div className="modal-wrapper"
                 style={{
                     opacity: showiconbell ? '1' : '0'
                 }}>
                <header className="modal-header">
                    <h1 className="modal-title-navbar"> Information </h1>

                    <button className="button-close-modal" onClick={closeModalHandler}> x
                        <span className="modal-close-container"> </span>
                    </button>
                </header>
                <div className="modal-content">
                    <div className="modal-body">
                        <a className="link-body" href="https://localhost:3000" target="_blank"> </a>
                        <div className="img-content">
                            <img src={trelloguide} alt="trelloguide" className="trelloguide-img"/>
                        </div>
                        <h3 className="title-content"> New To Trello? Check Out The Guide</h3>

                    </div>

                    <div className="modal-footer">
                    </div>


                </div>
            </div>
        </CloseModalOnClickOutside>
    )
}

export default CreateModalIconBell;