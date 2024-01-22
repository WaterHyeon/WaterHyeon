import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import Slider from "react-slick";
import work01 from "../assets/work01.png";
import work02 from "../assets/work02.png";
import work03 from "../assets/work03.png";
import work04 from "../assets/work04.png";
import work05 from "../assets/work05.png";
import work06 from "../assets/work06.png";

export default class Work extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    };
    return (
      <div className="inner">
        <section className="work content" id="work">   
        <Slider {...settings}>
          <div>
          <img src={work01} alt="work"/>
          </div>
          <div>
          <img src={work02} alt="work" />
          </div>
          <div>
          <img src={work03} alt="work" />
          </div>
          <div>
          <img src={work04} alt="work" />
          </div>
          <div>
          <img src={work05} alt="work" />
          </div>
          <div>
          <img src={work06} alt="work" />
          </div>
        </Slider>
        </section>
      </div>
    );
  }
}
