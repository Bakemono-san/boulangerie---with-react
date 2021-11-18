import React,{Component} from 'react';
import img1 from '../images/accueil-boulangerie.jpg'
import img2 from '../images/accueil-chocolaterie.jpg'
import img3 from '../images/accueil-patisserie_600x500px-2-1.jpg' 

class Cards extends React.Component {
    render() { 
        return <div className="card">
            <div>
                <img src={img1} alt="" />
                <h2>Boulangerie</h2>
                <p>Des baguettes et pains dans leur version classique ou spéciale pour tous les goûts.</p>
                <button>savourez</button>
            </div>

            <div>
                <img src={img2} alt="" />
                <h2>Chocolaterie</h2>
                <p>Des bonbons, du praliné, des tablettes, et du chocolat à la saveur unique !</p>
                <button>succombez</button>
            </div>

            <div>
                <img src={img3} alt="" />
                <h2>Patisserie</h2>
                <p>Des classiques de la pâtisserie en version revisitée, et des créations exclusives !</p>
                <button>Degustez</button>
            </div>

        </div>;
    }
}
 
export default Cards;