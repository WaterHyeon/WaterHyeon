import React from "react";
import './Modal.css';
import popup04 from "../assets/popup04.png";

const Modal3 = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
    <div className="popup04">
    <button className="close" onClick={close}>
              close
            </button>
        <div class="popup_img">
            <img src={popup04} alt="대한항공으로 떠나는 호주" className="popM" />
        </div>
        <div className="popup_txt">
            <div className="liststyle"></div>
            <span className="tit_popup">
                대한항공으로 떠나는 호주
            </span>
            <br />
            <span className="sub_popup01">
                소속 : 한진관광
                <br />
                직위 : 사원
                <br />
                직무 : IT관련 업무 일체
                <br />
                업무 내용 : 한진관광 기획전 디자인 및 코딩
                <br />
                제작 도구 : Adobe Photoshop
                <br />
                제작 기간 : 2일 소요 ( 추가 텍스트 등 기획 수정 제외 )
                <br />
                기획 : 메인 이미지를 제외한 문구, 이미지, 레이아웃이 정확히 기재된 기획안.
                <br />
                ( 메인 이미지의 경우, 기획자와 협의 후 결정 )
            </span>
        </div>
    </div>
        </section>
      ) : null}
    </div>
  );
};
export default Modal3;