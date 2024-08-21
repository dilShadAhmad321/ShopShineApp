import React from 'react'
import img1 from "../Images/Banners/img1.webp";
import img2 from "../Images/Banners/img2.webp";
import img3 from "../Images/Banners/img3.jpg";
import img4 from "../Images/Banners/img4.jpg";
import img5 from "../Images/Banners/img5.webp";

import img10 from "../Images/TV/LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA) 1.webp";
import img11 from "../Images/airpodes/boAt Airdopes 111 1.webp";
import img12 from "../Images/airpodes/boAt Airdopes 115 2.webp";
import img13 from "../Images/camera/Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens 2.jpg";
import img14 from "../Images/camera/Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black) 3.jpg";
import img15 from "../Images/camera/Fujifilm Instax Mini 9 Instant Camera (Cobalt Blue) 1.jpg";
import img16 from "../Images/earphones/boAt Rockerz 258 Pro+ 1.webp";
import img17 from "../Images/earphones/boAt Rockerz 258 Pro+ 3.webp";
import img18 from "../Images/mouse/Lenovo 130 Wireless Optical Mouse (2.4GHz Wireless, Black) 2.webp";
import img19 from "../Images/mouse/DELL MS 116 Wired Optical Mouse (USB, Black) 1.webp";
import img20 from "../Images/speakers/Stone 200 3.webp";
import img21 from "../Images/speakers/Stone 1350 2.webp";
import img22 from "../Images/speakers/Stone 1350 1.webp";
import img23 from "../Images/trimmers/PHILIPS BT3102-15 Trimmer 60 min Runtime 10 Length Settings (Multicolor) 2.webp";
import img24 from "../Images/trimmers/Syska HT450-Apache Green Trimmer 90 min Runtime 20 Length Settings (Green) 1.webp";
import img25 from "../Images/dslr.jpg";
import img26 from "../Images/earbuds.jpg";
import img27 from "../Images/mobile/realme C30 (Bamboo Green, 32 GB) (2 GB RAM) 1.webp";

function Electronics() {
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
            <p id="p-name">LG TV</p>
            <p id="p-desc">LG 123 cm LED Smart WebOS TV</p>
            <p id="p-price">Rs 14999 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img14} alt="img"></img>
            <p id="p-name">CANON DSLR</p>
            <p id="p-desc">Canon EOS 1500D dslr camera</p>
            <p id="p-price">Rs 34999 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img11} alt="img"></img>
            <p id="p-name">boAt </p>
            <p id="p-desc">boAt Airdopes</p>
            <p id="p-price">Rs 1499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img12} alt="img"></img>
            <p id="p-name">boAt</p>
            <p id="p-desc">boAt Airdopes</p>
            <p id="p-price">Rs 9499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img13} alt="img"></img>
            <p id="p-name">CANON DSLR</p>
            <p id="p-desc">Canon EOS 1500D dslr camera</p>
            <p id="p-price">Rs 34499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img15} alt="img"></img>
            <p id="p-name">INSTANT CAMERA</p>
            <p id="p-desc">Instax Mini 9 Instant Camera</p>
            <p id="p-price">Rs 5499 </p>
          </div>
        </div>
        <div className="mens-deals-box">
          <div className="deals-data">
            <img src={img16} alt="img"></img>
            <p id="p-name">NECKBAND</p>
            <p id="p-desc">boAt Neckband</p>
            <p id="p-price">Rs 1499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img17} alt="img"></img>
            <p id="p-name">NECKBAND</p>
            <p id="p-desc">boAt Neckband</p>
            <p id="p-price">Rs 1399 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img18} alt="img"></img>
            <p id="p-name">MOUSE</p>
            <p id="p-desc">Lenovo wired mouse</p>
            <p id="p-price">Rs 499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img19} alt="img"></img>
            <p id="p-name">MOUSE</p>
            <p id="p-desc">Wired Mouse</p>
            <p id="p-price">Rs 399 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img20} alt="img"></img>
            <p id="p-name">BOAT SPEAKER</p>
            <p id="p-desc">boAt speaker</p>
            <p id="p-price">Rs 1699 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img21} alt="img"></img>
            <p id="p-name">BOULT SPEAKER</p>
            <p id="p-desc">Boult speaker</p>
            <p id="p-price">Rs 2099 </p>
          </div>
        </div>
        <div className="mens-deals-box">
          <div className="deals-data">
            <img src={img22} alt="img"></img>
            <p id="p-name">BOULT SPEAKER</p>
            <p id="p-desc">Boult speaker Blue colour</p>
            <p id="p-price">Rs 2199 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img23} alt="img"></img>
            <p id="p-name">TRIMMER</p>
            <p id="p-desc">PHILIPS BT3102-15 Trimmer</p>
            <p id="p-price">Rs 8999 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img24} alt="img"></img>
            <p id="p-name">TRIMMER</p>
            <p id="p-desc">SYSKA BT3102-15 Trimmer</p>
            <p id="p-price">Rs 1599 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img25} alt="img"></img>
            <p id="p-name">NIKON DSLR</p>
            <p id="p-desc">Nikon dslr 5200D</p>
            <p id="p-price">Rs 45999 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img26} alt="img"></img>
            <p id="p-name">AIRDOPS</p>
            <p id="p-desc">boAt Airdopes</p>
            <p id="p-price">Rs 1499 </p>
          </div>
          <div className="mens-deals-data">
            <img src={img27} alt="img"></img>
            <p id="p-name">REALME MOBILE</p>
            <p id="p-desc">realme C30 2GB/64GB</p>
            <p id="p-price">Rs 17000 </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
}

export default Electronics