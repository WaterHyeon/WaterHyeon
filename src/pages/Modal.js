import React from "react";
import './Modal.css';
import popup01 from "../assets/popup01.png";

const Modal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="popup01">
            <button className="close" onClick={close}>
              close
            </button>
          <div className="popup_img">
              <a href="https://www.krei.re.kr/wldagr/selectBbsNttView.do?key=168&bbsNo=64&nttNo=141072&searchCtgry=&searchCnd=all&searchKrwd=&pageIndex=2&integrDeptCode=" title="career" alias="career">
                  <img src={popup01} alt="5월 세계농업" className="popM" />
              </a>
          </div>
          <div className="popup_txt">
              <div className="liststyle"></div>
              <span className="tit_popup">
                  5월 세계농업
              </span>
              <br />
              <span className="sub_popup01">
                  소속 : 한국농촌경제연구원
                  <br />
                  직위 : 위촉연구조원
                  <br />
                  직무 : 홈페이지 관리 및 웹디자인
                  <br />
                  업무 내용 : 세계농업 팀의 월별 발간 뉴스레터 디자인, 코딩 및 발송
                  <br />
                  제작 도구 : Adobe Illustrator
                  <br />
                  제작 기간 : 0.5일 소요 ( 추가 텍스트 등 기획 수정 제외 )
                  <br />
                  기획 : 메인 이미지를 제외한 문구, 이미지가 정확히 기재된 기획안.
                  <br />
                  ( 메인 이미지의 경우, 전체 컨셉 바탕으로 기획자와 협의 후 결정 )
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
export default Modal;