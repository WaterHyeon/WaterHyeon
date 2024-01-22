import React from "react";
import gmail from "../assets/gmail.png";
import direct from "../assets/direct.png";
import insta from "../assets/insta.png";
import blog from "../assets/blog.png";

const Footer = () => {
  return (
    <div className="innerF">
        <footer >
    
                <section class="direct" id="direct">
    
                    <section class="direct">
                        
                        <ul class="direct">
    
                            <li>
    
                                <a href="mailto:yysh3ssg@gmail.com" title="mail" alias="mail">
    
                                    <img src={gmail} alt="mail" />
    
                                </a>
    
                            </li>
    
                            <li>
    
                                <a href="tel:01098591316" title="direct" alias="direct">
    
                                    <img src={direct} alt="direct" />
    
                                </a>
    
                            </li>
    
                            <li>
    
                                <a href="https://www.instagram.com/youn_sh_/" title="insta" alias="insta">
    
                                    <img src={insta} alt="insta" />
    
                                </a>
    
                            </li>
    
                            <li>
    
                                <a href="https://blog.naver.com/yysh3ssg" title="blog" alias="blog">
    
                                    <img src={blog} alt="blog" />
    
                                </a>
    
                            </li>
    
                        </ul>
                    </section>
    
                </section>
    
                <section className="copy">

                    <span>
    
                        ※ 모든 질문에 대한 답변은 제작자의 성장의 밑거름으로만 쓰여질 예정입니다. 
                        <br />
                        소중한 의견 들려주셔서 감사합니다. 더 궁금하신 사항 또는 추가 문의가 있으실 경우 언제든 연락 주시길 바랍니다. 
                        <br />
                        감사합니다. (꾸벅)
    
                    </span>
    
                </section>
    
        </footer>
    </div>
  );
};

export default Footer;
