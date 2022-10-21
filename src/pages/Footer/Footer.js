import React from "react";
import "./Footer.scss";
import FooterSignUpComponent from "./FooterSignUpComponent";
import CustomerInquiryMenuComponent from "./CustomerInquiryMenuComponent";
import FooterBusinessInfo from "./FooterBusinessInfo";
import ShoppingMenuComponent from "./ShoppingMenuComponent";
import ServiceMenuComponent from "./ServiceMenuComponent";
import IkeaStoryMenuComponent from "./IkeaStoryMenuComponent";
import FooterIconComponent from "./FooterIconComponent";
import { CUSTOMER_INQUIRY_MENU_ITEM } from "./FooterConstData";
import { SHOPPING_MENU_ITEM } from "./FooterConstData";
import { SERVICE_MENU_DATA } from "./FooterConstData";
import { IKEA_STORY_MENU_BAR_ITEM } from "./FooterConstData";
import { WEBSITE_TERMS_MENU } from "./FooterConstData";
import { COMPANY_INFO } from "./FooterConstData";
import { MEMBERSHIP_SIGNUP_GUIDING_DATA } from "./FooterConstData";
import { FOOTER_ICON_DATA } from "./FooterConstData";

function Footer() {
  return (
    <div className="footer-frame">
      <div className="footer-main">
        <div className="membership-signup-area">
          {MEMBERSHIP_SIGNUP_GUIDING_DATA.map(item => {
            return (
              <div key={item.title}>
                <FooterSignUpComponent
                  title={item.title}
                  discription={item.discription}
                  buttonText={item.buttonText}
                />
              </div>
            );
          })}
        </div>
        <div className="footer-menu-area-container">
          {CUSTOMER_INQUIRY_MENU_ITEM.map(item => {
            return (
              <div className="footer-menu-component-container" key={item.title}>
                <CustomerInquiryMenuComponent
                  title={item.title}
                  customerSupport={item.customerSupport}
                  fAQ={item.fAQ}
                  makeAQuestion={item.makeAQuestion}
                  deliveryCheck={item.deliveryCheck}
                  changeAndRefund={item.changeAndRefund}
                  qualityInsurance={item.qualityInsurance}
                  recall={item.recall}
                  feedBack={item.feedBack}
                />
              </div>
            );
          })}
          {SHOPPING_MENU_ITEM.map(item => {
            return (
              <div className="footer-menu-component-container" key={item.title}>
                <ShoppingMenuComponent
                  title={item.title}
                  remoteOrder={item.remoteOrder}
                  forBusiness={item.forBusiness}
                  selfPlanning={item.selfPlanning}
                  mobileApp={item.mobileApp}
                  tipForUsing={item.tipForUsing}
                  tipForPurchasing={item.tipForPurchasing}
                  paymentOption={item.paymentOption}
                  giftCard={item.giftCard}
                />
              </div>
            );
          })}
          {SERVICE_MENU_DATA.map(item => {
            return (
              <div className="footer-menu-component-container" key={item.title}>
                <ServiceMenuComponent
                  title={item.title}
                  ikeaService={item.ikeaService}
                  deliveryService={item.deliveryService}
                  assemblyService={item.assemblyService}
                  installService={item.installService}
                  kitchenService={item.kitchenService}
                  planningService={item.planningService}
                  designService={item.designService}
                  buyBackService={item.buyBackService}
                />
              </div>
            );
          })}
          {IKEA_STORY_MENU_BAR_ITEM.map(item => {
            return (
              <div className="footer-menu-component-container" key={item.title}>
                <IkeaStoryMenuComponent
                  title={item.title}
                  introducingBrand={item.introducingBrand}
                  lifeInsideHouse={item.lifeInsideHouse}
                  sustainableLife={item.sustainableLife}
                  housePhilosophy={item.housePhilosophy}
                  newsRoom={item.newsRoom}
                  recruiting={item.recruiting}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-icon-and-language-area">
        <div className="footer-icon-area">
          {FOOTER_ICON_DATA.map(item => {
            return (
              <div key={item.id}>
                <FooterIconComponent icon={item.icon} />
              </div>
            );
          })}
        </div>

        <div className="footer-language-area">
          <button className="change-country-button footer-language-area-button">
            🌏 국가 변경
          </button>
          <select className="change-language-button footer-language-area-button">
            <option value="korea-option">한국어</option>
            <option value="english-option">English</option>
          </select>
        </div>
      </div>

      <div className="footer-company-info-area">
        <div className="footer-company-info-area-bar">
          <div className="year-of-ikea ">
            © Inter IKEA Systems B.V 1999-2022
          </div>
          <div className="footer-website-terms-menu">
            {WEBSITE_TERMS_MENU.map(item => {
              return (
                <div key={item.id} className="each-terms-item">
                  {item.termsElement}
                </div>
              );
            })}
          </div>
        </div>

        <div className="ikea-business-info-area">
          {COMPANY_INFO.map(item => {
            return (
              <div
                className="ikea-business-info-component-container"
                key={item.title}
              >
                <FooterBusinessInfo
                  id={item.id}
                  companyInfo={item.companyInfo}
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
