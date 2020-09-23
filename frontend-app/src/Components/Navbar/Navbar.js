import React, {useState} from 'react'
import './Navbar.css'
import trellologo from "../../img/trello.jpg";
import CreateModalIconPlus from "./CreateModalIconPlus";
import CreateModalIconBell from "./CreateModalIconBell";
import {CreateModalUser} from "./CreateModalUser";

const Navbar = props => {

    const {setRefresh, personalBoards} = props

    //console.log(personalBoards) //con esto estaba intentando obtener el id del user para despues poder coger su nombre y usarlo en User de la navbar

    const [ showiconplus, setShowplus ] = useState(false);
    const [ showiconbell, setShowbell ] = useState(false);
    const [ showinconuser, setShowiconuser ] = useState(false);


    return (

        <nav className="header-container-navbar">
            <div className={"header-container-navbar"}>
                <div className="left-container-navbar">

                    <button className={"button-container-navbar"}> <i className={"icon-list-bullet"}/> </button>
                    <button className={"button-container-navbar"} href="/home"> <i className="icon-home"/> </button>
                    <button className={"button-container-navbar"}> <i className="icon-trello" /> Tableros </button>
                </div>

                <div>
                    <input  className="input-container-navbar" type="search" id="fname-search" name="icon-search"/>
                    <div className="search-container-navbar">
                        <i className="icon-search"/>
                    </div>
                </div>
                <a href="/home">
                    <div className="trello-img-logo-navbar">
                        <img className="trello-logo-imagen-navbar" src={trellologo} alt="trello-logo"/>
                    </div>
                </a>

                <div className="right-container-navbar">
                    <button onClick={() => setShowplus (true)} className="button-container-navbar"> <i className="icon-plus"/> </button>
                    {showiconplus && <CreateModalIconPlus setRefresh={setRefresh} showiconplus={showiconplus} closeModalHandler={() => setShowplus(false)}/>}
                    <button onClick={() => setShowbell (true)} className="button-container-navbar" href="/"> <i className="icon-info-circled-alt"/> </button>
                    {showiconbell && <CreateModalIconBell showiconbell={showiconbell} closeModalHandler={() => setShowbell(false)}/>}
                    <button onClick={() => setShowbell (true)} className="button-container-bell" href="/"> <i className="icon-bell"/> </button>
                    {showiconbell && <CreateModalIconBell showiconbell={showiconbell} closeModalHandler={() => setShowbell(false)}/>}
                    <button onClick={() => setShowiconuser (true)} className="button-container-navbar"> User </button>
                    {showinconuser && <CreateModalUser showiconuser={showinconuser} closeModalHandler={() => setShowiconuser(false)}/>}

                </div>
            </div>
        </nav>
    );
};
export default Navbar;
