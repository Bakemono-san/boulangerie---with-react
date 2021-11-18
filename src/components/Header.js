import React,{Component} from 'react'
import tel from '../images/phone-black.png';
import logo from '../images/logo.png'
import fb from '../images/facebook.png'
import ins from '../images/insta.png'

class Header extends React.Component {
    render() { 
        return <div className="header">
            <p><img src={tel}  />Tel : 02 27 76 24 70 <a href="https://www.facebook.com/Boulangerie-dymare-116070096467132/"><img src={fb} className="cli" /></a> <a href="https://www.instagram.com/boulangerie_ovide/"><img src={ins} className="cli"/></a></p>
            {/* <span>
                <a href="#">
                <img src=""/>
                </a>
            </span> */}
            <div>
                <a href="">BOULANGERIE</a>
                <a href="">PATISSERIE</a>
                <img src={logo} alt="" />
                <a href="">CHOCOLATERIE</a>
                <a href="">CONTACT</a>
            </div>
        </div>;
    }
}
 
export default Header;