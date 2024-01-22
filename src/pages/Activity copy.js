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


const Activity = () => {
  return (
    <div className="inner">
        <section className="activity content" id="activity">
            <h2>변화하는 퍼블리셔, 윤수현입니다.</h2>            
                <ul className="activity">
                <li>
                    <Link to="https://m.blog.naver.com/yysh3ssg/221551935180" target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite01} alt="브랜드콘서트 결선진출" />
                        <br />
                        <span className="activity_txt_sub">
                            팀화이트_팀장
                            <br />
                            <p className="activity_txt_tit">
                                브랜드콘서트 결선진출
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/p/B0UYrmxnqvP/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite02} alt="브랜드시상식 스태프 2회 참여" />
                        <br />
                        <span className="activity_txt_sub">
                            팀화이트_팀장
                            <br />
                            <p className="activity_txt_tit">
                                브랜드시상식 스태프 2회 참여
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/p/BzQaEY1H8aG/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite03} alt="브랜드아카데미 수료" />
                        <br />
                        <span className="activity_txt_sub">
                            팀화이트_팀장
                            <br />
                            <p className="activity_txt_tit">
                                브랜드아카데미 수료
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/p/Bzet4B7nfMV/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="팀화이트" alias="팀화이트">
                        <img src={teamwhite04} alt="모범상, 개근상 수상" />
                        <br />
                        <span className="activity_txt_sub">
                            팀화이트_팀장
                            <br />
                            <p className="activity_txt_tit">
                                모범상, 개근상 수상
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://m.blog.naver.com/yysh3ssg/221457267555"  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita01} alt="공방 방문 홍보" />
                        <br />
                        <span className="activity_txt_sub">
                            마끼다 대학생 서포터즈_홍보팀장
                            <br />
                            <p className="activity_txt_tit">
                                공방 방문 홍보
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://youtu.be/NxxjSdloP7A"  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita02} alt="마끼다 매장 홍보영상 제작" />
                        <br />
                        <span className="activity_txt_sub">
                            마끼다 대학생 서포터즈_홍보팀장
                            <br />
                            <p className="activity_txt_tit">
                                마끼다 매장 홍보영상 제작 
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://m.blog.naver.com/yysh3ssg/221541193632"  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita03} alt="팀별 미션 우수팀 2회 수상" />
                        <br />
                        <span className="activity_txt_sub">
                            마끼다 대학생 서포터즈_홍보팀장
                            <br />
                            <p className="activity_txt_tit">
                                팀별 미션 우수팀 2회 수상
                            </p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/p/BzeiKzHHMNe/?igshid=NTc4MTIwNjQ2YQ=="  target="_blank" title="마끼다대학생서포터즈" alia="마끼다대학생서포터즈">
                        <img src={makita04} alt="우수활동자 수상" />
                        <br />
                        <span className="activity_txt_sub">
                            마끼다 대학생 서포터즈_홍보팀장
                            <br />
                            <p className="activity_txt_tit">
                                우수활동자 수상
                            </p>
                        </span>
                    </Link>
                </li>             
            </ul>
        </section>
    </div>
  );
};

export default Activity;
