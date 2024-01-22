import React from "react";
import './Modal.css';
import popup02 from "../assets/popup02.png";

const Modal1 = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="popup02">
          <button className="close" onClick={close}>
              close
            </button>
        <div className="popup_img">
            <a href="https://www.krei.re.kr/krei/selectBbsNttView.do?key=104&bbsNo=4&nttNo=141570&searchCtgry=&searchCnd=all&searchKrwd=&pageIndex=9&integrDeptCode=" title="career" alias="career">
                <img src={popup02} alt="UN 푸드시스템 정상회의" className="popM"/>
            </a>
        </div>
        <div className="popup_txt">
            <div className="liststyle"></div>
            <span className="tit_popup">
                UN 푸드시스템 정상회의
            </span>
            <br />
            <span className="sub_popup01">
                소속 : 한국농촌경제연구원
                <br />
                직위 : 위촉연구조원
                <br />
                직무 : 홈페이지 관리 및 웹디자인
                <br />
                업무 내용 : 2021년 UN 푸드시스템 정상회의 제5차 국내 논의 포스터 제작
                <br />
                제작 도구 : Adobe Illustrator
                <br />
                제작 기간 : 1일 소요 ( 추가 텍스트 등 기획 수정 제외 )
                <br />
                기획 : 문구만 정해진 기획안. 
                <br />
                (전체 이미지와 구조, 포인트 색상과 폰트는 단독으로 결정 후 진행 )
                <br />
                <span className="sub_popup02">
                    ※ 이미지를 클릭하시면 해당 웹사이트로 연결됩니다.
                </span>
            </span>
        </div>
    </div>
        </section>
      ) : null}
    </div>
  )
}
export default Modal1;