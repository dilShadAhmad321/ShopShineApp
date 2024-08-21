import React from "react";
import img1 from "../Images/Banners/mens-banner1.png";
import img2 from "../Images/Banners/mens-banner2.png";
import img3 from "../Images/Banners/mens-banner3.png";
import img4 from "../Images/Banners/mens-banner4.png";
import img5 from "../Images/Banners/mens-banner5.png";
import img6 from "../Images/Banners/mens-banner6.png";
import img7 from "../Images/Banners/mens-banner7.png";
import img10 from "../Images/products/jacket-1.jpg";
import img11 from "../Images/products/jacket-5.jpg";
import img12 from "../Images/products/jacket-3.jpg";
import img13 from "../Images/products/jacket-4.jpg";
import img14 from "../Images/products/jacket-2.jpg";
import img15 from "../Images/products/shirt-2.jpg";
import img16 from "../Images/products/2.jpg";
import img17 from "../Images/products/3.jpg";
import img18 from "../Images/products/shirt-1.jpg";
import img19 from "../Images/pic13.jpeg";
import img20 from "../Images/pic24.jpeg";
import img21 from "../Images/tshirt.jpg";
import "../css/Mens.css";

function Mens() {
  return (
    <>
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
                <p id="p-name">JACKET</p>
                <p id="p-desc">Mens Winter Jackets</p>
                <p id="p-price">Rs 4499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img14} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Men Regular Casual Shirt</p>
                <p id="p-price">Rs 999 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img11} alt="img"></img>
                <p id="p-name">LONG JACKET</p>
                <p id="p-desc">Mens Yarn Fleece Full Jacket</p>
                <p id="p-price">Rs 3999 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img12} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Mens Regular Casual Shirt</p>
                <p id="p-price">Rs 5499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img13} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Mens Regular Casual Shirt</p>
                <p id="p-price">Rs 1499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img15} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Mens White Cotton Shirt</p>
                <p id="p-price">Rs 399 </p>
              </div>
            </div>
            <div className="mens-deals-box">
              <div className="deals-data">
                <img src={img16} alt="img"></img>
                <p id="p-name">HOODIE</p>
                <p id="p-desc">Mens Hoodie</p>
                <p id="p-price">Rs 1499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img17} alt="img"></img>
                <p id="p-name">SWEATSHIRT</p>
                <p id="p-desc">Mens SweatShirt</p>
                <p id="p-price">Rs 399 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img18} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Mens Cotton Blue Shirt</p>
                <p id="p-price">Rs 299 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img19} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Mens Cotton Shirt</p>
                <p id="p-price">Rs 399 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img20} alt="img"></img>
                <p id="p-name">TSHIRT</p>
                <p id="p-desc">Mens Regular Tshirt</p>
                <p id="p-price">Rs 299 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img21} alt="img"></img>
                <p id="p-name">TSHIRT</p>
                <p id="p-desc">Mens Regular Tshirt</p>
                <p id="p-price">Rs 349 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mens;
