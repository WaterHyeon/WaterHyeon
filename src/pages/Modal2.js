import React from "react";
import './Modal.css';
import popup03 from "../assets/popup03.png";

const Modal2 = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
    <div className="popup03">
    <button className="close" onClick={close}>
              close
            </button>
        <div className="popup_img">
            <a href="https://yeodam.kr/promotion/promotion_list/?id=32&theme=all&n_media=27758&n_query=%EC%97%AC%EB%8B%B4&n_rank=1&n_ad_group=grp-a001-04-000000023878695&n_ad=nad-a001-04-000000195004999&n_keyword_id=nkw-a001-04-000004084269473&n_keyword=%EC%97%AC%EB%8B%B4&n_campaign_type=4&n_contract=tct-a001-04-000000000559255&n_ad_group_type=5" title="career" alias="career">
                <img src={popup03} alt="career" className="popM" />
            </a>
        </div>
        <div className="popup_txt">
            <div className="liststyle"></div>
            <span className="tit_popup">
                여담 특가 of 특가
            </span>
            <br />
            <span className="sub_popup01">
                소속 : 한진관광
                <br />
                직위 : 사원
                <br />
                직무 : IT관련 업무 일체
                <br />
                업무 내용 : 한진관광 자체 플랫폼 여담의 기획전 디자인 및 코딩
                <br />
                제작 도구 : Adobe Photoshop
                <br />
                제작 기간 : 1일 소요 ( 추가 텍스트 등 기획 수정 제외 )
                <br />
                기획 : 메인 이미지 컨셉과 텍스트 구성이 정확히 기재된 기획안.
                <br />
                ( 메인 이미지의 경우, 기획자와 협의 후 결정 )
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
  );
};
export default Modal2;