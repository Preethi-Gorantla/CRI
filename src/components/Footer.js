import { Fragment } from "react";
import './Footer.css';
import web from '../assets/web.png'
const Footer = () => {

    return(
        <Fragment>
        <hr></hr>
        <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
        <p>CHEMICALS <span>|</span> PROCESS POWER WATER<span>|</span> WASTE WATER OILS <span>|</span> GAS PHARMA SUGARS <span>|</span> DISTILLERIES PAPER <span>|</span> PULP MARINE <span>|</span> DEFENCE METAL <span>|</span> MINING FOOD <span>|</span> BEVERAGE PETROCHEMICAL <span>|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span>|</span> RESIDENTIAL</p>
        <div className="footer">
            <p><i class="fas fa-phone-square-alt"></i>Toll Free 1800 200 1234</p>
            <p><i class="fab fa-facebook"></i>www.facebook.com/cripumps</p>
            <p><img className="web" src={web} alt=""/> www.crigroups.com</p>
        </div>
        </Fragment>
    )

}

export default Footer;