import React from "react";
import "./Footer.scss";
import FooterLeftComponent from "./FooterLeftComponent";
import FooterRightComponent from "./FooterRightComponent";

function Footer() {
  return (
    <div className="footer-frame">
      <div className="top">
        <div className="left">
          {FOOTER_CONST_1.map(item => {
            return (
              <div key={item.title}>
                <FooterLeftComponent
                  title={item.title}
                  discription={item.discription}
                  buttonText={item.buttonText}
                />
              </div>
            );
          })}
        </div>
        <div className="right">
          {FOOTER_CONST_2.map(item => {
            return (
              <div className="component-container" key={item.id}>
                <FooterRightComponent
                  title={item.title}
                  item1={item.item1}
                  item2={item.item2}
                  item3={item.item3}
                  item4={item.item4}
                  item5={item.item5}
                  item6={item.item6}
                  item7={item.item7}
                  item8={item.item8}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="center">
        <div className="left">
          <button className="icon1 button">
            <span className="material-symbols-outlined icon">mail</span>
          </button>
          <button className="icon2 button">
            <span className="material-symbols-outlined icon">call</span>
          </button>
          <button className="icon3 button">
            <span className="material-symbols-outlined icon">home</span>
          </button>
          <button className="icon4 button">
            <span className="material-symbols-outlined icon">settings</span>
          </button>
        </div>
        <div className="right">
          <button className="button1 button">🌏 국가 변경</button>
          <select className="button2 button">
            <option value="grape">한국어</option>
            <option value="melon">English</option>
          </select>
        </div>
      </div>
      <div className="bottom">아래입니다</div>
    </div>
  );
}
export default Footer;

const FOOTER_CONST_1 = [
  {
    title: "IKEA Family",
    discription:
      "지금 IKEA Family에 무료로 가입하고 다양한 멤버 전용 혜택을 누리세요.",
    buttonText: "IKEA Family 가입하기",
  },
  {
    title: "IKEA Business Network",
    discription:
      "여러분의 더 나은 비즈니스 환경을 위한 다양한 혜택들을 받으세요",
    buttonText: "IKEA Business Network 가입하기",
  },
];

const FOOTER_CONST_2 = [
  {
    id: "1",
    title: "고객문의",
    item1: "고객지원",
    item2: "자주 묻는 질문",
    item3: "문의하기",
    item4: "배송조회",
    item5: "교환환불",
    item6: "품질보증",
    item7: "제품리콜",
    item8: "피드백",
    item9: "부품 신청",
  },
  {
    id: "2",
    title: "쇼핑하기",
    item1: "헤이오더",
    item2: "IKEA for Business",
    item3: "셀프 플래닝",
    item4: "IKEA 모바일 앱",
    item5: "제품 사용 팁/가이드",
    item6: "제품 구매 가이드",
    item7: "결제옵션",
    item8: "기프트 카드",
  },
  {
    id: "3",
    title: "서비스",
    item1: "IKEA 서비스",
    item2: "배송 서비스 ",
    item3: "조립 서비스",
    item4: "설치 서비스",
    item5: "주방 서비스",
    item6: "플래닝 서비스",
    item7: "인테리어 디자인 서비스",
    item8: "바이백 서비스",
  },
  {
    id: "4",
    title: "IKEA 이야기",
    item1: "브랜드 소개",
    item2: "집에서의 삶",
    item3: "지속가능한 생활",
    item4: "내가 아끼는 집, 나를 아끼는 집",
    item5: "뉴스룸",
    item6: "채용정보",
  },
];
