import React, { useEffect, useState } from "react";
import SideModal from "../../components/SideModal/SideModal";
import ItemBar from "./ItemBar/ItemBar";
import "./Cart.scss";

function Cart() {
  const [products, setProducts] = useState([]);
  const [isCouponFormOpened, setIsCouponFormOpened] = useState(false);
  const [sideModal, setSideModal] = useState("");
  const [isUnmountModal, setIsUnmountModal] = useState(false);

  const openSideModal = e => {
    const { id } = e.target.dataset;
    setSideModal(id);
  };
  const closeModal = () => {
    setIsUnmountModal(true);
    setTimeout(() => {
      sideModal !== "" && setSideModal("");
      setIsUnmountModal(false);
    }, 300);
  };
  const toggleCouponForm = () => {
    setIsCouponFormOpened(!isCouponFormOpened);
  };
  const totalPrice = () => {
    const prices = products.map(product => product.price * product.quantity);
    return prices.reduce((total, current) => total + current, 0);
  };
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getMockData = () => {
    fetch("/data/Cart/product.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    getMockData();
  }, []);

  return (
    <>
      {sideModal !== "" && (
        <SideModal
          className={SIDE_MODAL_CONTENT[sideModal].className}
          title={SIDE_MODAL_CONTENT[sideModal].title}
          content={SIDE_MODAL_CONTENT[sideModal].content}
          closeModal={closeModal}
          isUnmountModal={isUnmountModal}
        />
      )}
      <div className="cart-page">
        <main className="cart-body">
          <header className="cart-title">
            <h1 className="cart-title-content">장바구니</h1>
          </header>
          <ul className="cart-list">
            {products?.map(product => {
              return (
                <ItemBar
                  key={product.id}
                  product={product}
                  priceToString={priceToString}
                  moveTo={"위시리스트"}
                />
              );
            })}
          </ul>
        </main>
        <aside className="payment">
          <header className="payment-title">주문내역</header>
          <div className="delivery-fee">
            <h4>전체 배송비</h4>
            <span>weKEA는 전 품목 무료배송입니다.</span>
          </div>
          <div className="total-price">
            <h4 className="total-price-title">총 주문금액</h4>
            <span className="total-price-content">
              ₩ {priceToString(totalPrice())}
            </span>
          </div>
          <div className="payment-btn">
            <h4 className="payment-btn-title">결제하기</h4>
            <span className="material-symbols-outlined payment-btn-icon">
              arrow_forward
            </span>
          </div>
          <div className="coupon" onClick={toggleCouponForm}>
            <div className="coupon-title">
              <span className="material-symbols-outlined">sell</span>
              <h4 className="coupon-title-content">쿠폰 입력</h4>
            </div>
            <span
              className={`material-symbols-outlined coupon-drop-icon ${
                isCouponFormOpened ? "coupon-drop-icon-rotate" : ""
              }`}
            >
              keyboard_arrow_down
            </span>
          </div>
          <div
            className={`coupon-form-wrapper ${
              isCouponFormOpened ? "coupon-form-opened" : ""
            }`}
          >
            <p className="coupon-description">
              쿠폰/바우처 코드는 주문 당 하나만 사용할 수 있습니다. 문자 사이에
              공백없이 코드를 입력하세요.
            </p>
            <form className="coupon-form">
              <input className="coupon-input" type="text" />
              <button className="coupon-btn">적용</button>
            </form>
          </div>
          <div className="refund">
            <span className="material-symbols-outlined">replay</span>
            <p
              className="refund-content"
              data-id="refund"
              onClick={openSideModal}
            >
              반품 정책 365일 이내에 제품 환불 가능
            </p>
          </div>
          <div className="security">
            <span className="material-symbols-outlined">lock</span>
            <p
              className="security-content"
              data-id="security"
              onClick={openSideModal}
            >
              SSL 데이터 암호화로 안전한 쇼핑
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

const SIDE_MODAL_CONTENT = {
  refund: {
    className: "white-modal",
    title: "마음이 바뀌어도 괜찮습니다!",
    content:
      "구입한 weKEA 제품이 만족스럽지 않다면 언제든지 새제품과 미개봉 제품을 반품하고 전액 환불받을 수 있습니다",
  },
  security: {
    className: "white-modal",
    title: "이 사이트는 안전합니다",
    content: "weKEA는 민감한 정보를 다루지 않아 안전합니다.",
  },
};

export default Cart;
