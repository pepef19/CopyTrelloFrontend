import React from "react";
import './CreateModalUser.css';
import CloseModalOnClickOutside from "./CloseModalOnClickOutside";

export const CreateModalUser = ({closeModalHandler}) => {

    const logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    //fetch(API + `?_start=0&_limit=5`//

    return (
        <CloseModalOnClickOutside closeModalHandler={closeModalHandler} >
            <div className="modal-wrapper user-logout-component">
                <button className="logout-navbar-button" onClick={() => logOut()}>
                    Log Out
                </button>
            </div>
        </CloseModalOnClickOutside>
    );
}

