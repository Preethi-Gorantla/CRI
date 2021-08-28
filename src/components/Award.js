import awardimg from '../assets/1.png';
import image2 from '../assets/2.png';
import './Award.css';
const Award = () => {

    return (
      <div className="row mb-5">
        <img className="col-12 col-md-4 award-image" src={awardimg} alt="" />
        <div className="col-12 col-md-8">
          <h6>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h6>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img className="image-2 mb-5" src={image2} alt="" />
        </div>
      </div>
    );

}
export default Award;