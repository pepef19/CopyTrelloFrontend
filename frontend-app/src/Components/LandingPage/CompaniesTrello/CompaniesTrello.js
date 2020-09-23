import React from 'react'
import './CompaniesTrello.css'

const CompaniesTrello = props => {
    return(
        <div className={"companies-trello-box container"}>
            <h3>Trabaje de manera más inteligente con Trello</h3>
            <p>Empresas de todas las índoles y tamaños utilizan Trello</p>
            <div className={"companies-trello-img-box"}>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/4838c7256b43105d3abe0631ac1bb72c/logo-google.svg" alt="google"/>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/759e9aaacc706fd1f2d5f81b1a76b768/logo-fender.svg" alt="fender"/>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0a48ad04e74b4ac85420dc6e8ae829bb/logo-squarespace.svg" alt="squarespace"/>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/ef0a1d5c99b0bee172d0d8ceee54c626/logo-costco.svg" alt="costco"/>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/02368db0db91ce9af0cd8aea3c54b395/logo-lush.svg" alt="lush"/>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/182d5e3e3d2acdd3c58f474ca6f01975/logo-pinterest.svg" alt="pinterest"/>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/578fd933f299fb7c15e5494ebfa77c80/logo-bose.svg" alt="bose"/>
            </div>
            <button>Descubrir cómo</button>
        </div>
    )
}

export default CompaniesTrello;