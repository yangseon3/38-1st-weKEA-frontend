import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Cart.scss";

function Cart() {
  return (
    <>
      <Nav />
      <div className="cart-page">
        <main className="cart-body">
          <header>
            <h1>장바구니</h1>
            <span className="material-symbols-outlined">more_horiz</span>
          </header>
          <ul className="cart-list"></ul>
        </main>
        <aside className="payment">
          <header>주문내역</header>
          <div className="delivery-fee">
            <h4>전체 배송비</h4>
            <span>weKEA는 전 품목 무료배송입니다.</span>
          </div>
          <div className="total-price">
            <h4>총 주문금액</h4>
            <span>₩ 1,000,000</span>
          </div>
          <div className="payment-btn">
            <span>결제하기</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          <div className="coupon">
            <span className="material-symbols-outlined">sell</span>
            <h4>쿠폰 입력</h4>
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </div>
          <div className="refund">
            <span className="material-symbols-outlined">replay</span>
            <p>반품 정책 365일 이내에 제품 환불 가능</p>
          </div>
          <div className="security">
            <span className="material-symbols-outlined">lock</span>
            <p>SSL 데이터 암호화로 안전한 쇼핑</p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Cart;
