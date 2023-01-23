import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import image1 from "../../assets/images/atty1.jpg";
import image2 from "../../assets/images/atty2.jpg";
import CustomersCard from "../../components/customers-card";
import { Collapse } from "antd";
const { Panel } = Collapse;
const HomePage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Notary - Free Website Template</title>
      </Helmet>
      <div className="home">
        <section id="notary">
          <div className="container">
            <div className="notary">
              <div className="about">
                <h1>
                  Notary Public & <br /> Legal Solutions
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis cupiditate deserunt placeat necessitatibus a aliquam
                  corrupti nisi odio aliquid, accusamus.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="practice-areas">
          <div className="container">
            <div className="cards">
              <h1>
                Practice <span>Areas</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="row">
                <div className="col">
                  <img src={icon1} alt="" />
                  <h3>Bankruptcy Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
                <div className="col">
                  <img src={icon2} alt="" />
                  <h3>Business Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
                <div className="col">
                  <img src={icon3} alt="" />
                  <h3>Civil Rights Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src={icon4} alt="" />
                  <h3>Criminal Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
                <div className="col">
                  <img src={icon5} alt="" />
                  <h3>Immigration Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
                <div className="col">
                  <img src={icon6} alt="" />
                  <h3>Family Law</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="provides">
          <div className="container">
            <div className="provide">
              <div className="imgs">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
              </div>
              <div className="texts">
                <div className="head">
                  We Provide Highly{" "}
                  <span>
                    Reliable <br /> & Effective
                  </span>{" "}
                  Legal Solutions
                </div>
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae, explicabo iste a labore id est quas, doloremque
                  veritatis! Provident odit pariatur dolorem quisquam,
                  voluptatibus voluptates optio accusamus, vel quasi quidem!
                </p>
                <button>Book an appointment</button>
              </div>
            </div>
          </div>
        </section>
        <CustomersCard />
        <section id="solutions">
          <div className="container">
            <div className="solutions">
              <div className="img">
                <img src={image2} alt="" />
              </div>
              <div className="texts">
                <div className="head">
                  We Have{" "}
                  <span>
                    Legal <br /> Solutions
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam reprehenderit perspiciatis iste culpa consequuntur
                  consequatur eum, voluptatum, quod deserunt maiores?
                </p>
                <p>
                  Modi perferendis ipsa ducimus consequuntur excepturi autem,
                  numquam facere aperiam iste nam molestias provident
                  consectetur molestiae voluptatibus ipsum. Fugiat, quas.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Aperiam iste nam
                    molestias
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Modi perferendis ipsa
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Perspic iste culpa
                  </li>
                </ul>
              </div>

              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="How to download and register?" key="1">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </p>
                </Panel>
                <Panel header="How to create your paypal account" key="2">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </p>
                </Panel>
                <Panel
                  header="How to link your paypal and blank account"
                  key="3"
                >
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
