import React,{Component} from 'react';
import heart from '../images/heart-outline.svg'
import fav from '../images/bookmarks-outline.svg';
import clock from '../images/clock-black .png'
import pers from '../images/people.svg'

class Last extends React.Component {
    render() { 
        return <div className="last">
            <h2>LA BOULANGERIE D’YMARE C’EST </h2>
            <div className="vert"></div>
            <div className="container">
                <div>
                    <img src={heart}/>
                    <p>Des produits 100% faits maison</p>
                </div>
                <div>
                    <img src={fav} alt="" />
                    <p>Des matières premières locales et de qualité</p>
                </div>
                <div>
                    <img src={clock} alt="" />
                    <p>Du pain cuit tout au long de la journée</p>
                </div>
                <div>
                    <img src={pers} alt="" />
                    <p>Du pain cuit tout au long de la journée</p>
                </div>
            </div>
        </div>;
    }
}
 
export default Last;