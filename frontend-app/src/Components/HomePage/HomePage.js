import React, {useEffect, useState} from 'react'
import './HomePage.css'
import HomePageMenu from "./Home PageMenu/HomePageMenu";
import Teams from "./Teams/Teams";
import RecentlyViews from "./RecentlyViews/RecentlyViews";
import PersonalBoards from "./PersonalBoards/PersonalBoards";
import Navbar from "../Navbar/Navbar";
import Api from "../../api";

const HomePage = props => {

    const [recentlyBoards, setRecentlyBoards] = useState("");
    const [ownerBoards, setOwnerBoards] = useState("");

    useEffect(() => {
        Api.fetchResource("board", {}) //intentar delimitar los resultados que salen por params
            .then(pinFormResponse => { //Caracteristicas de la respuesta
                //pinFormResponse.sort((a, b) => parseFloat(a.lastView) - parseFloat(b.lastView));
                setOwnerBoards(pinFormResponse);
            });
    }, [])

    return(
        <div>
            <Navbar className="header-container-navbar" background-color="transparent" personalBoards={ownerBoards} />

            <div className={"container home-page"}>
                <div className={"home-page-left"}>
                    <HomePageMenu/>
                    <Teams/>
                </div>
                <div className={"home-page-right"}>
                    { recentlyBoards && <RecentlyViews recentlyBoards={recentlyBoards}/>}
                    { ownerBoards && <PersonalBoards personalBoards={ownerBoards}/>}
                </div>
            </div>
        </div>

    )
}

export default HomePage;