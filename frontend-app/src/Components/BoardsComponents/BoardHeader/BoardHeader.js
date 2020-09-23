import React from "react";
import "./BoardHeader.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LockIcon from '@material-ui/icons/Lock';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function BoardHeader () {
    return (
        <div className="boardHeader-navBar">
            <div className="project">
                <span className="project-button">Projecto</span>
                <input className="input-button-project" aria-label="Projecto" spellCheck="false"
                       dir="auto" maxLength="512" value="Projecto" />
            </div>

            <a className="button-star" href="#" title="Haga clic en este tablero para marcalo como favorito">
                <span className="button-star-icon"><StarBorderIcon /></span>
            </a>

            <div className="privado">
                <div className="privado-button">
                    <span className="privado-button-divisor"></span>
                    <span id="privado-asunto">
                        <div className="asunto">
                            <a href="#" className="asunto-button">
                                <span className="asunto-button-text">Para asuntos privados</span>
                            </a>
                        </div>
                    </span>
                    <span className="privado-button-divisor"></span>
                </div>

                <a className="privado-solo" href="#">
                    <span className="privado-solo-icon"><LockIcon/></span>
                    <span className="privado-solo-icon-text">Privado</span>
                </a>
            </div>

            <span className="privado-button-divisor"></span>

            <div className="opciones">
                <div className="opciones-user">
                    <a className="opciones-user-member">
                        <span className="member-initials">AB</span>
                    </a>
                </div>
                <span></span>
                <span id="invite-button">
                    <div>
                        <a className="invite-button-table">
                            <span className="invite-button-text">Invitar</span>
                        </a>
                    </div>
                </span>
            </div>

            <div className="menu">
                <span className="menu-icon">
                        <span className="menu-icon-a"><RoomServiceIcon/></span>
                        <span className="menu-button-text">Buttler</span>
                </span>
                <a className="privado-solo">
                    <span className="menu-icon-a" ><MoreHorizIcon/></span>
                    <span className="menu-button-text">Mostrar Menú</span>
                </a>
            </div>

        </div>
    )
}

export default BoardHeader;