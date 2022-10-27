import React from "react";
import "./Footer.scss";
import FooterSignUpComponent from "./FooterSignUpComponent";
import FooterBusinessInfo from "./FooterBusinessInfo";
import FooterIconComponent from "./FooterIconComponent";
import {
  WEBSITE_TERMS_MENU,
  COMPANY_INFO,
  MEMBERSHIP_SIGNUP_GUIDING_DATA,
  FOOTER_ICON_DATA,
  CUSTOMER_INQUIRIES,
  SHOPPING,
  SERVICE,
  LANGUAGE_OPTION_CHANGE_BOX,
  IKEA_STORY,
} from "./FooterConstData";

function Footer() {
  function FooterMainMenuBoxRenderingComponent({ id, title }) {
    return <div key={id}>{title}</div>;
  }
  return (
    <div className="footer-frame">
      <div className="footer-main">
        <div className="membership-signup-area">
          {MEMBERSHIP_SIGNUP_GUIDING_DATA.map(inquiryTitle => {
            return (
              <div key={inquiryTitle.title}>
                <FooterSignUpComponent
                  title={inquiryTitle.title}
                  discription={inquiryTitle.discription}
                  buttonText={inquiryTitle.buttonText}
                />
              </div>
            );
          })}
        </div>
        <div className="footer-main-menu-box-container">
          <div className="footer-main-menu-box">
            <div className="footer-main-menu-box-bold-title">고객문의</div>
            {CUSTOMER_INQUIRIES.map(title => {
              return (
                <div className="each-menu-column-container">
                  <FooterMainMenuBoxRenderingComponent
                    key={title.id}
                    id={title.id}
                    title={title.title}
                  />
                </div>
              );
            })}
          </div>
          <div className="footer-main-menu-box">
            <div className="footer-main-menu-box-bold-title">쇼핑하기</div>
            {SHOPPING.map(title => {
              return (
                <div className="each-menu-column-container">
                  <FooterMainMenuBoxRenderingComponent
                    key={title.id}
                    title={title.title}
                  />
                </div>
              );
            })}
          </div>
          <div className="footer-main-menu-box">
            <div className="footer-main-menu-box-bold-title">IKEA 서비스</div>
            {SERVICE.map(title => {
              return (
                <div className="each-menu-column-container">
                  <FooterMainMenuBoxRenderingComponent
                    key={title.id}
                    title={title.title}
                  />
                </div>
              );
            })}
          </div>
          <div className="footer-main-menu-box">
            <div className="footer-main-menu-box-bold-title">브랜드 소개</div>
            {IKEA_STORY.map(title => {
              return (
                <div className="each-menu-column-container">
                  <FooterMainMenuBoxRenderingComponent
                    key={title.id}
                    title={title.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-icon-and-language-area">
        <div className="footer-icon-area">
          {FOOTER_ICON_DATA.map(icon => {
            return (
              <div key={icon.id}>
                <FooterIconComponent icon={icon.icon} />
              </div>
            );
          })}
        </div>

        <div className="footer-language-area">
          <button className="change-country-button footer-language-area-button">
            🌏 국가 변경
          </button>
          <select className="change-language-button footer-language-area-button">
            {LANGUAGE_OPTION_CHANGE_BOX.map(el => {
              return (
                <option value={el.value} key={el.id}>
                  {el.language}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="footer-company-info-area">
        <div className="footer-company-info-area-bar">
          <div className="Company history information">
            © Inter IKEA Systems B.V 1999-2022
          </div>
          <div className="footer-website-terms-menu">
            {WEBSITE_TERMS_MENU.map(terms => {
              return (
                <div key={terms.id} className="each-terms">
                  {terms.termsElement}
                </div>
              );
            })}
          </div>
        </div>

        <div className="ikea-business-info-area">
          {COMPANY_INFO.map(info => {
            return (
              <div
                className="ikea-business-info-component-container"
                key={info.title}
              >
                <FooterBusinessInfo
                  id={info.id}
                  companyInfo={info.companyInfo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Footer;
