import React from 'react'
import img1 from "../Images/kidscoll/kidsbanner2.png";
import img2 from "../Images/kidscoll/images (1).jpeg";
import img3 from "../Images/kidscoll/images (2).jpeg";
import img4 from "../Images/kidscoll/kidsbanner1.jpeg";
import img5 from "../Images/kidscoll/images.jpeg";
import img6 from "../Images/kidscoll/kidsbanner.jpg";
import img7 from "../Images/kidscoll/images (3).jpeg";
import img10 from "../Images/kidscoll/pic1.jpg";
import img11 from "../Images/kidscoll/pic10.jpg";
import img12 from "../Images/kidscoll/pic11.jpg";
import img13 from "../Images/kidscoll/pic12.jpg";
import img14 from "../Images/kidscoll/pic13.jpg";
import img15 from "../Images/kidscoll/pic14.jpg";
import img16 from "../Images/kidscoll/pic15.jpg";
import img17 from "../Images/kidscoll/pic16.jpg";
import img18 from "../Images/kidscoll/pic17.jpg";
import img19 from "../Images/kidscoll/pic2.webp";
import img20 from "../Images/kidscoll/pic3.jpg";
import img21 from "../Images/kidscoll/pic5.jpg";
import img22 from "../Images//kidscoll/pic6.jpg";
import img23 from "../Images/kidscoll/pic7.jpg";
import img24 from "../Images/kidscoll/pic8.jpg";
import img25 from "../Images/kidscoll/pic9.jpg";

function Kids() {
  return <>
  <div className="container-fluid">
    <div className="carousel slide" data-ride="carousel" id="newcoll">
      <div className="carousel-indicators">
        <li
          className="active"
          data-target="#newcoll"
          data-slide-to="0"
        ></li>
        <li data-target="#newcoll" data-slide-to="1"></li>
        <li data-target="#newcoll" data-slide-to="2"></li>
        <li data-target="#newcoll" data-slide-to="3"></li>
        <li data-target="#newcoll" data-slide-to="4"></li>
        <li data-target="#newcoll" data-slide-to="5"></li>
        <li data-target="#newcoll" data-slide-to="6"></li>
        <li data-target="#newcoll" data-slide-to="7"></li>
        <li data-target="#newcoll" data-slide-to="8"></li>
        <li data-target="#newcoll" data-slide-to="9"></li>
      </div>
      <div className="carousel-inner m-4">
        <div className="carousel-item active">
          <img src={img1} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption"></div>
        </div>
        <div className="carousel-item">
          <img src={img3} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption"></div>
        </div>
        <div className="carousel-item">
          <img src={img4} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption"></div>
        </div>
        <div className="carousel-item">
          <img src={img5} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption"></div>
        </div>
        <div className="carousel-item">
          <img src={img6} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption"></div>
        </div>
        <div className="carousel-item">
          <img src={img7} alt="img" width={1450} height={400}></img>
          <div class="carousel-caption"></div>
        </div>
      </div>
      <a
        href="#newcoll"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="sr-only"></span>
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </a>
      <a
        href="#newcoll"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="sr-only"></span>
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </a>
    </div>

    <div className="container-fluid m-3">
      <div className="main-container">
        <div className="mens-deals-box">
          <div className="mens-deals-data">
            <img src={img10} alt="img"></img>
            <p id="p-name">FROCK</p>
            <p id="p-desc">Polka dot frock</p>
            <p id="p-price">Rs 499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img14} alt="img"></img>
            <p id="p-name">PRINTED FROCK</p>
            <p id="p-desc">Girls printed frock</p>
            <p id="p-price">Rs 349 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img11} alt="img"></img>
            <p id="p-name">KURTA</p>
            <p id="p-desc">Dhoti Kurta for boy</p>
            <p id="p-price">Rs 999 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img12} alt="img"></img>
            <p id="p-name">FROCK</p>
            <p id="p-desc">Red Frock for girls</p>
            <p id="p-price">Rs 1299 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img13} alt="img"></img>
            <p id="p-name">FROCK</p>
            <p id="p-desc">Red Frock for girls</p>
            <p id="p-price">Rs 1099 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img15} alt="img"></img>
            <p id="p-name">FROCK</p>
            <p id="p-desc">Frock for girls</p>
            <p id="p-price">Rs 1099 </p>
          </div>
        </div>
        <div className="mens-deals-box">
        <div className="deals-data">
            <img src={img22} alt="img"></img>
            <p id="p-name">JACKET</p>
            <p id="p-desc">Jacket for boys </p>
            <p id="p-price">Rs 799 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img17} alt="img"></img>
            <p id="p-name">Gown</p>
            <p id="p-desc">Gown for girls</p>
            <p id="p-price">Rs 1199 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img18} alt="img"></img>
            <p id="p-name">TOP</p>
            <p id="p-desc">Top for Girls</p>
            <p id="p-price">Rs 499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img19} alt="img"></img>
            <p id="p-name">TOP</p>
            <p id="p-desc">Bandi set for girls</p>
            <p id="p-price">Rs 399 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img20} alt="img"></img>
            <p id="p-name">KIDS COLLECTION</p>
            <p id="p-desc">For girls</p>
            <p id="p-price">Rs 499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img21} alt="img"></img>
            <p id="p-name">TSHIRT</p>
            <p id="p-desc">Printed Tshirt</p>
            <p id="p-price">Rs 299 </p>
          </div>
        </div>
        <div className="mens-deals-box">
 
          <div className="mens-deals-data">
            <img src={img23} alt="img"></img>
            <p id="p-name">STRIPED CLOTH</p>
            <p id="p-desc">Stripe cloth for baby boy</p>
            <p id="p-price">Rs 599 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img24} alt="img"></img>
            <p id="p-name">BABY CLOTH</p>
            <p id="p-desc">Cloth for newborn baby</p>
            <p id="p-price">Rs 499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img25} alt="img"></img>
            <p id="p-name">JACKET</p>
            <p id="p-desc">Winter Jacket for baby</p>
            <p id="p-price">Rs 1499 </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</>
}

export default Kids