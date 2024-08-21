import React from "react";
import img1 from "../Images/Womens/carousel1.png";
import img2 from "../Images/Womens/blog-1.png";
import img3 from "../Images/Womens/blog-2.png";
import img4 from "../Images/Womens/blog-3.png";
import img5 from "../Images/Womens/carousel1.png";
import img6 from "../Images/Womens/banner1.png";
import img7 from "../Images/Womens/blog-4.png";
import img10 from "../Images/products/clothes-1.jpg";
import img11 from "../Images/products/clothes-3.jpg";
import img12 from "../Images/products/clothes-2.jpg";
import img13 from "../Images/products/clothes-4.jpg";
import img14 from "../Images/products/jacket-6.jpg";
import img15 from "../Images/pic2.jpeg";
import img16 from "../Images/pic7.jpeg";
import img17 from "../Images/pic12.jpeg";
import img18 from "../Images/pic40.jpg";
import img19 from "../Images/Womens/babasuit.png";
import img20 from "../Images/Womens/banarsisaree.png";
import img21 from "../Images/Womens/cottonfrock.png";
import img22 from "../Images/Womens/cottonkurti.png";
import img23 from "../Images/Womens/longfrock.png";
import img24 from "../Images/Womens/orangetop.png";
import img25 from "../Images/Womens/printedfrock.png";
import img26 from "../Images/Womens/printedkurti.png";
import img27 from "../Images/Womens/printedsaree1.png";

function Womens() {
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
                <p id="p-name">TSHIRT</p>
                <p id="p-desc">Women Round Neck Tshirt</p>
                <p id="p-price">Rs 699 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img14} alt="img"></img>
                <p id="p-name">LONG JACKET</p>
                <p id="p-desc">Womens Yarn Fleece Full Jacket</p>
                <p id="p-price">Rs 1499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img11} alt="img"></img>
                <p id="p-name">Ethnic Wear</p>
                <p id="p-desc">Girls Lehenga Ethnic Wear</p>
                <p id="p-price">Rs 999 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img12} alt="img"></img>
                <p id="p-name">GIRLS TOP</p>
                <p id="p-desc">Girls Top</p>
                <p id="p-price">Rs 349 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img13} alt="img"></img>
                <p id="p-name">ETHNIC WEAR</p>
                <p id="p-desc">Girls Lehenga Ethnic Wear</p>
                <p id="p-price">Rs 999 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img15} alt="img"></img>
                <p id="p-name">FROCK</p>
                <p id="p-desc">Girls Cotton Frock</p>
                <p id="p-price">Rs 299 </p>
              </div>
            </div>
            <div className="mens-deals-box">
              <div className="deals-data">
                <img src={img16} alt="img"></img>
                <p id="p-name">TOP</p>
                <p id="p-desc">Girls Top</p>
                <p id="p-price">Rs 499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img17} alt="img"></img>
                <p id="p-name">GIRLS WEAR</p>
                <p id="p-desc">Regular girls wear</p>
                <p id="p-price">Rs 399 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img18} alt="img"></img>
                <p id="p-name">SCARF</p>
                <p id="p-desc">Scarf for winter</p>
                <p id="p-price">Rs 299 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img19} alt="img"></img>
                <p id="p-name">SUMMER WEAR</p>
                <p id="p-desc">Summer wear </p>
                <p id="p-price">Rs 399 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img20} alt="img"></img>
                <p id="p-name">SAREE</p>
                <p id="p-desc">Saree for women</p>
                <p id="p-price">Rs 1499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img21} alt="img"></img>
                <p id="p-name">FROCK</p>
                <p id="p-desc">Frock for girls</p>
                <p id="p-price">Rs 499 </p>
              </div>
            </div>
            <div className="mens-deals-box">
              <div className="deals-data">
                <img src={img22} alt="img"></img>
                <p id="p-name">KURTI</p>
                <p id="p-desc">Kurti for girls</p>
                <p id="p-price">Rs 499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img23} alt="img"></img>
                <p id="p-name">FROCK</p>
                <p id="p-desc">Cotton Frock</p>
                <p id="p-price">Rs 399 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img24} alt="img"></img>
                <p id="p-name">TOP</p>
                <p id="p-desc">Girls Top</p>
                <p id="p-price">Rs 399 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img25} alt="img"></img>
                <p id="p-name">TOP</p>
                <p id="p-desc">Girls Top</p>
                <p id="p-price">Rs 349 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img26} alt="img"></img>
                <p id="p-name">KURTI</p>
                <p id="p-desc">Girls Kurti</p>
                <p id="p-price">Rs 499 </p>
              </div>
              <div className="mens-deals-data">
                <img src={img27} alt="img"></img>
                <p id="p-name">SAREE</p>
                <p id="p-desc">Saree for women</p>
                <p id="p-price">Rs 1299 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Womens;
