import React from "react";
import barry from "../images/fournisseur-barry-1.png"
import moulin from "../images/fournisseur-chars-1.png"
import mino from "../images/fournisseur-forest-1.png"

class Class extends React.Component {
    render() { 
        return <div className="las">
            <h2>NOS FOURNISSEURS</h2>
            <div className="vert"></div>
            <div className="container">
                <a href="https://www.cacao-barry.com/fr-FR/home">
                    <img src={barry} alt="" />
                </a>
                <a href="http://www.moulinsdechars.com/">
                    <img src={moulin} alt="" />
                </a>
                <a href="https://www.minoterie-forest.com/">
                    <img src={mino} alt="" />
                </a>
            </div>
        </div>;
    }
}
 
export default Class;