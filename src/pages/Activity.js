import React from "react";
import { Link } from "react-router-dom";
import teamwhite01 from "../assets/teamwhite01.png";
import teamwhite02 from "../assets/teamwhite02.png";
import teamwhite03 from "../assets/teamwhite03.png";
import teamwhite04 from "../assets/teamwhite04.png";
import makita01 from "../assets/makita01.png";
import makita02 from "../assets/makita02.png";
import makita03 from "../assets/makita03.png";
import makita04 from "../assets/makita04.png";
import './Activity.css';


const Activity = () => {
  return (
	<section id="three" className="inner wrapper paper">
		<div className="innerA flexW flex-3">
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://m.blog.naver.com/yysh3ssg/221551935180" target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite01} alt="브랜드콘서트 결선진출" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>팀화이트_팀장</h3>
					<p>브랜드콘서트 결선진출</p>
				</div>
			</div>
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://www.instagram.com/p/B0UYrmxnqvP/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite02} alt="브랜드시상식 스태프 2회 참여" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>팀화이트_팀장</h3>
					<p>브랜드시상식 스태프 2회 참여</p>
				</div>
			</div>
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://www.instagram.com/p/BzQaEY1H8aG/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite03} alt="브랜드아카데미 수료" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>팀화이트_팀장</h3>
					<p>브랜드아카데미 수료</p>
				</div>
			</div>
			<div className="flex-item box item_sepe">
				<div className="image fit">
                <Link to="https://www.instagram.com/p/Bzet4B7nfMV/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite04} alt="브랜드콘서트 결선진출" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>팀화이트_팀장</h3>
					<p>모범상, 개근상 수상</p>
				</div>
			</div>
		</div>
		<div className="innerA flexW flex-3">
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://m.blog.naver.com/yysh3ssg/221457267555"  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita01} alt="공방 방문 홍보" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>마끼다 대학생 서포터즈_홍보팀장</h3>
					<p>공방 방문 홍보</p>
				</div>
			</div>
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://youtu.be/NxxjSdloP7A"  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita02} alt="마끼다 매장 홍보영상 제작" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>마끼다 대학생 서포터즈_홍보팀장</h3>
					<p>마끼다 매장 홍보영상 제작</p>
				</div>
			</div>
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://m.blog.naver.com/yysh3ssg/221541193632"  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita03} alt="팀별 미션 우수팀 2회 수상" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>마끼다 대학생 서포터즈_홍보팀장</h3>
					<p>팀별 미션 우수팀 2회 수상</p>
				</div>
			</div>
			<div className="flex-item box item_sepe">
				<div className="image fit">
                    <Link to="https://www.instagram.com/p/BzeiKzHHMNe/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita04} alt="우수활동자 수상" />
                    </Link>
				</div>
				<div className="c_content">
					<h3>마끼다 대학생 서포터즈_홍보팀장</h3>
					<p>우수활동자 수상</p>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Activity;
