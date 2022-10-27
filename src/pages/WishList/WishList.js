import React, { useEffect, useState } from "react";
import AlertModal from "../../components/AlertModal/AlertModal";
import WishListItem from "./WishListItem/WishListItem";
import { getWishList, addToCart } from "../../functions/requests";
import "./WishList.scss";

function WishList() {
  const [wishLists, setWishLists] = useState([]);
  const [isAppearAlert, setIsAppearAlert] = useState(false);

  const popAlertModal = () => {
    setIsAppearAlert(true);
    setTimeout(() => {
      setIsAppearAlert(false);
    }, 3000);
  };
  const totalPrice = () => {
    const prices = wishLists.map(product => parseInt(product.price));
    return prices.reduce((total, current) => total + current, 0);
  };
  const priceToString = price => {
    return parseInt(price)
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const addAllProductToCart = () => {
    wishLists.map((product, index) => {
      if (index % 2 === 1) {
        addToCart(product.id, popAlertModal);
      }
    });
  };

  useEffect(() => {
    getWishList(setWishLists);
  }, []);

  return (
    <>
      {isAppearAlert && (
        <AlertModal alertModalContent={"장바구니에 추가되었습니다."} />
      )}
      <div className="wish-list-page">
        <main className="wish-list-body">
          <header className="wish-list-title">
            <h1 className="wish-list-title-content">위시리스트</h1>
          </header>
          <ul className="wish-list-items">
            {wishLists?.map((product, index) => {
              if (index % 2 === 1) {
                return (
                  <WishListItem
                    key={product.id}
                    product={product}
                    priceToString={priceToString}
                    popAlertModal={popAlertModal}
                    setWishLists={setWishLists}
                  />
                );
              }
            })}
          </ul>
        </main>
        <aside className="wish-list-summary">
          <header className="wish-list-summary-title">위시리스트 요약</header>
          <hr className="wish-list-summary-line" />
          <div className="total-price">
            <h4 className="total-price-title">정가</h4>
            <span className="total-price-content">
              ₩ {priceToString(totalPrice() / 2)}
            </span>
          </div>
          <p className="buy-online">이 제품을 온라인으로 구매하시겠어요?</p>
          <div className="add-to-cart-all" onClick={addAllProductToCart}>
            <div className="add-to-cart-all-wrapper">
              <span className="material-symbols-outlined add-to-cart-all-icon">
                add_shopping_cart
              </span>
              <h4 className="add-to-cart-all-title">
                장바구니에 모든 제품 추가
              </h4>
            </div>
            <span className="material-symbols-outlined add-to-cart-all-arrow">
              arrow_forward
            </span>
          </div>
        </aside>
      </div>
    </>
  );
}

export default WishList;
