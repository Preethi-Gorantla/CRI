import image from '../assets/3.png';
import './Products.css';
const Products = () => {

    return (
      <div className="row text-center product">
        <p className="text-left para col-11">
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
        <h6 class="col-11 product">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING O
        </h6>
        <img className="col-12" src={image} alt="" />
        <p className="col-12">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
    );
}

export default Products;