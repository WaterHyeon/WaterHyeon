import React from "react";
import './Welcome.css';

const Welcome = () => {
  return (
    <section id="one" className="wrapper paper">
        <div className="inner">
		<div className="innerW flexW flex-3">
			<div className="flex-item left">
				<div>
					<h3>Introduction</h3>
					<p>윤수현<br /> 1991.09.24</p>
					<p>
						정보처리기능사 | 웹디자인기능사 | GTQ 1급
					</p>
				</div>
				<div>
					<h3>Career</h3>
					<p>
						<b>파오스파트너스</b> | 웹퍼블리셔 및 웹디자인<br />
						<b>한진관광</b> | 디자인 및 html코더<br />
						<b>한국농촌경제연구원</b> | 홈페이지관리 및 웹디자인
					</p>
				</div>
			</div>
			<div className="flex-item image fit round">
				<img src="/assets/back.png" alt="" width="330" height="330" />
			</div>
			<div className="flex-item right">
				<div>
					<h3>Education</h3>
					<p>
						한번에 끝내는 React.js 수료 (16시간)<br />
						디지털 퍼블리싱 양성과정 수료 (700시간)
					</p>
				</div>
				<div>
					<h3>Skill</h3>
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
				</div>
			</div>
		</div>
        </div>
    </section>
  );
};

export default Welcome;
