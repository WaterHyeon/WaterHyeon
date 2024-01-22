import React from "react";

const Welcome = () => {
  return (
    <div id="one" className="wrapper direct">
        <div className="inner flex flex-3">
            <section className="welcome clearfix content" id="welcome">

            <h2>안녕하세요. 윤수현입니다.</h2>

            <div className="welcome_bg">
                <img className="rotatetext" src="/assets/rotatetext.png" alt="rotatetext" />
                <img className="back" src="/assets/back.png" alt="back" />
            </div>
            <div className="name">
                <ul className="name">
                    <li>NAME</li>
                    <li>윤수현</li>
                </ul>
            </div>

            <div className="career">
                <ul className="career">
                    <li>CAREER</li>
                    <li>
                        <b>한국농촌경제연구원 성과확산팀</b> | 홈페이지 관리 및 웹디자인 | 2020.08317-2021.08.27 
                        <br />
                        <b>한진관광  IT산업본부</b>  | 디자이너 | 2022.05.15~2022.07.31
                        <br />
                        <b>파오스파트너스 Ditgital Marketing</b> | 디자이너 겸 웹퍼블리셔 | 2023.03.13 (-ing)
                    </li>
                </ul>
            </div>

            <div className="edu">
                <ul className="edu">
                    <li>EDUCATION</li>
                    <li>
                        디지털 퍼블리싱 양성과정 (700시간) 수료
                        <br />
                        한번에 끝내는 React.js (16시간) 수료
                    </li>
                </ul>
            </div>

            <div className="license">
                <ul className="license">
                    <li>LICENSE</li>
                    <li>
                        정보처리기능사 | 2021.12.31 | 21404103647Z
                        <br />
                        웹디자인기능사 | 2021.09.17 | 21404102184U
                        <br />
                        GTQ 1급 | 2019.05.17 | GA10119104692397
                    </li>
                </ul>
            </div>

            <div className="skill">
                <ul className="skill">
                    <li>SKILL</li>
                    <li>
                        <ul className="skill_icon">
                            <li><img src="/assets/photoshop.png" alt="photoshop" /></li>
                            <li><img src="/assets/illust.png" alt="illust" /></li>
                            <li><img src="/assets/indesign.png" alt="indesign" /></li>
                            <li><img src="/assets/figma.png" alt="figma" /></li>
                            <li><img src="/assets/html.png" alt="html" /></li>
                            <li><img src="/assets/css.png" alt="css" /></li>
                            <li><img src="/assets/js.png" alt="js" /></li>
                            <li><img src="/assets/react.png" alt="react" /></li>
                        </ul>
                    </li>
                </ul>
            </div>

            </section>
        </div>
    </div>
  );
};

export default Welcome;
