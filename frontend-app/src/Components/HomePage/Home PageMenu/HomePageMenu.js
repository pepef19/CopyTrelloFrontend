import React, {useState} from 'react'
import './HomePageMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrello } from '@fortawesome/free-brands-svg-icons'

const HomePageMenu = props => {

    const menu = {"board": "Board", "templates": "Templates", "home": "Home"};

    const activeMenuInitialState = {"board": true, "templates": false, "home": false}
    const [activeMenu, setActiveMenu] = useState(activeMenuInitialState);

    const changeMenu = menuClicked => {
        let newMenuState = {...activeMenuInitialState, board: false, templates: false, home: false };
        newMenuState[`${menuClicked}`] = true;
        setActiveMenu(newMenuState);
    }

    return (
        <div className={"home-page-menu"}>
            {Object.keys(menu).map(key => {
                return(
                    <div className={activeMenu[key] === true ? "active menu-text" : "menu-text"} onClick={(e) => {changeMenu(key)}}>
                        <FontAwesomeIcon className={"menu-icon"} icon={faTrello} />
                        <div className="menu-items-left" >{menu[key]}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePageMenu;