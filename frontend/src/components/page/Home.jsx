import React from "react";
import img40 from "../Images/icons/traditional-icon.png";
import img41 from "../Images/icons/Western-icon.png";
import img42 from "../Images/icons/swim-icon.png";
import img49 from "../Images/icons/winter-icon.png";
import img50 from "../Images/icons/beauty-icon.jpeg";
import img51 from "../Images/icons/jewellery-icon.png";
import img52 from "../Images/icons/personalcare-icon.jpeg";
import img53 from "../Images/icons/international-icon.png";
import img54 from "../Images/icons/footwear-icon.jpeg";
import img55 from "../Images/icons/watch-icon.jpg";
import img56 from "../Images/icons/accessories-icon.jpeg";
import img10 from "../Images/products/jacket-1.jpg";
import img11 from "../Images/products/jacket-5.jpg";
import img12 from "../Images/products/shoe-4.jpg";
import img13 from "../Images/products/watch-1.jpg";
import img14 from "../Images/products/clothes-2.jpg";
import img15 from "../Images/products/sports-2.jpg";
import img16 from "../Images/products/2.jpg";
import img17 from "../Images/products/4.jpg";
import img18 from "../Images/products/shirt-1.jpg";
import img19 from "../Images/products/shampoo.jpg";
import img20 from "../Images/products/shorts-1.jpg";
import img21 from "../Images/products/belt.jpg";

import img22 from "../Images/1ap.png";
import img23 from "../Images/camera/CP PLUS 3MP Full HD Smart Wi-fi CCTV Home Security Camera 1.jpg";
import img24 from "../Images/printer.png";
import img25 from "../Images/mouse/mouse1.png";
import img26 from "../Images/TV/tv1.png";
import img27 from "../Images/earphones/boAt Rockerz 258 Pro+ 3.webp";
import img28 from "../Images/airpodes/boAt Airdopes 411 ANC 2.webp";
import img29 from "../Images/watches/boAt Cosmos Pro 2.webp";
import img30 from "../Images/TV/SAMSUNG 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV (UA43TU8570UXXL) 4.webp";
import img31 from "../Images/camera/Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit 1.jpg";
import img32 from "../Images/trimmers/Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black) 3.webp";
import img33 from "../Images/speakers/Stone 1350 1.webp";

import img97 from "../Images/offer1.jpg";
import img96 from "../Images/offer2.jpg";
import img95 from "../Images/offer3.jpg";
import img94 from "../Images/main-model.jpg";
import img93 from "../Images/banner-3.png";
import img92 from "../Images/banner-2.png";
import img80 from "../Images/man.png";
import img81 from "../Images/woman.png";
import img82 from "../Images/boy.png";
import img83 from "../Images/tv.png";
import img84 from "../Images/sofa.png";
import img85 from "../Images/game-controller.png";
import img86 from "../Images/stack-of-books.png";
import img87 from "../Images/gift-box.png";
// import img79 from "../Images/menu.png";

import { NavLink } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="Main-bar">
          <div className="sidebar">
            <div className="sidebar-bottom">
              <nav>
                <ul>
                  {/* <li id="hamburger">
                  <NavLink to="">
                    <img src={img79} height={50} width={50} atl="img"></img>
                  </NavLink>
                </li> */}

                  <li id="Mens">
                    <NavLink to="Mens">
                      <img src={img80} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Womens">
                    <NavLink to="Womens">
                      <img src={img81} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Kids">
                    <NavLink to="Kids">
                      <img src={img82} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Electronics">
                    <NavLink to="Electronics">
                      <img src={img83} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Furniture">
                    <NavLink to="Furniture">
                      <img src={img84} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Games">
                    <NavLink to="Games">
                      <img src={img85} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Books">
                    <NavLink to="Books">
                      <img src={img86} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                  <hr className="line" />
                  <li id="Gifts">
                    <NavLink to="Gifts">
                      <img src={img87} height={50} width={50} atl="img"></img>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="main-content">
            <section className="item-box">
              <ul>
                <li>
                  <img src={img40} alt="Icon" />
                  <NavLink to="Traditional">
                    <span>Traditional Wear</span>
                  </NavLink>
                </li>

                <li>
                  <img src={img41} alt="Icon" />
                  <NavLink to="Western">
                    <span>Western Wear</span>
                  </NavLink>
                </li>

                <li>
                  <img src={img42} alt="Icon" />
                  <NavLink to="#">
                    <span>Swim & Beachwear</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img49} alt="Icon" />
                  <NavLink to="Winter">
                    <span>Winter & Seasonal Wear</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img50} alt="Icon" />
                  <NavLink to="Beauty">
                    <span>Beauty & Grooming</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img51} alt="Icon" />
                  <NavLink to="Jewellery">
                    <span>Jewellery</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img52} alt="Icon" />
                  <NavLink to="PersonalAppliances">
                    <span>Personal care Appliances</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img53} alt="Icon" />
                  <NavLink to="InternationalBrand">
                    <span>International Brands</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img54} alt="Icon" />
                  <NavLink to="Footwear">
                    <span>Foot Wear</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img55} alt="Icon" />
                  <NavLink to="Watches">
                    <span>Watches</span>
                  </NavLink>
                </li>
                <li>
                  <img src={img56} alt="Icon" />
                  <NavLink to="Accessories">
                    <span>Accessories</span>
                  </NavLink>
                </li>
              </ul>
            </section>
            <div className="maain">
              <div className="main-products">
                <img src={img94} alt=""></img>
              </div>

              <div className="main-products2 d-flex ">
                <div className="side-box">
                  <img src={img97} alt="img"></img>
                </div>
                <div className="side-box">
                  <img src={img96} alt="img"></img>
                </div>
                <div className="side-box">
                  <img src={img95} alt="img"></img>
                </div>
              </div>
            </div>
            <div className="main-products1">
              <div className="side-box1">
                <img src={img92} alt=""></img>
              </div>
              <div className="side-box1">
                <img src={img93} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <h5 id="Deals-of">Deals of the Day</h5>

        <div className="container-fluid m-3">
          <div className="deals-box">
            <div className="deals-data">
              <NavLink to="SignIn">
                <img src={img10} alt="img"></img>
                <p id="p-name">JACKET</p>
                <p id="p-desc">Mens Winter Leathers Jackets</p>
                <p id="p-price">Rs 4499 </p>
              </NavLink>
            </div>

            <div className="deals-data">
              <NavLink to="Womens">
                <img src={img14} alt="img"></img>
                <p id="p-name">GIRLS TOP</p>
                <p id="p-desc">Girls Pink Embro Design Top</p>
                <p id="p-price">Rs 999 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Mens">
                <img src={img11} alt="img"></img>
                <p id="p-name">JACKET</p>
                <p id="p-desc">Mens Yarn Fleece Full Jacket</p>
                <p id="p-price">Rs 3999 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Footwear">
                <img src={img12} alt="img"></img>
                <p id="p-name">SHOE</p>
                <p id="p-desc">Mens Casual Woodland Shoe</p>
                <p id="p-price">Rs 5499 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Watches">
                {" "}
                <img src={img13} alt="img"></img>
                <p id="p-name">WATCH</p>
                <p id="p-desc">Popular Smart Watch</p>
                <p id="p-price">Rs 1499 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Footwear">
                <img src={img15} alt="img"></img>
                <p id="p-name">SHOE</p>
                <p id="p-desc">Popular Sports Shoe</p>
                <p id="p-price">Rs 2499 </p>
              </NavLink>
            </div>
          </div>
          <div className="deals-box">
            <div className="deals-data">
              <NavLink to="mens">
                {" "}
                <img src={img16} alt="img"></img>
                <p id="p-name">HOODIE</p>
                <p id="p-desc">Mens Hoodie</p>
                <p id="p-price">Rs 1499 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Accessories">
                <img src={img17} alt="img"></img>
                <p id="p-name">HAT</p>
                <p id="p-desc">Brown Hat</p>
                <p id="p-price">Rs 399 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Mens">
                <img src={img18} alt="img"></img>
                <p id="p-name">SHIRT</p>
                <p id="p-desc">Mens Blue Shirt</p>
                <p id="p-price">Rs 299 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Accessories">
                <img src={img19} alt="img"></img>
                <p id="p-name">shampoo</p>
                <p id="p-desc">Shampoo 2 in 1</p>
                <p id="p-price">Rs 399 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Mens">
                <img src={img20} alt="img"></img>
                <p id="p-name">SHORTS</p>
                <p id="p-desc">Shorts set</p>
                <p id="p-price">Rs 499 </p>
              </NavLink>
            </div>
            <div className="deals-data">
              <NavLink to="Accessories">
                {" "}
                <img src={img21} alt="img"></img>
                <p id="p-name">BELT</p>
                <p id="p-desc">Mens Belt</p>
                <p id="p-price">Rs 299 </p>
              </NavLink>
            </div>
          </div>
          <div className="main-banner">
            <h4>
              Up to 60% off | Electronics & accessories curated from stores
              nearby
            </h4>
          </div>
          <div className="main">
            <div className="child">
              <NavLink to="Electronics">
                {" "}
                <img src={img22} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img23} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img24} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img25} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img26} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img27} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img28} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img29} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img30} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img31} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                {" "}
                <img src={img32} alt="img"></img>
              </NavLink>
            </div>
            <div className="child">
              <NavLink to="Electronics">
                <img src={img33} alt="img"></img>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
