import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideModal from "../../components/SideModal/SideModal";
import ImageModal from "./components/ImageModal";
import { getDetail, addToCart, addWishList } from "../../functions/requests";
import "./Detail.scss";

function Detail() {
  const [imageModalIndex, setImageModalIndex] = useState(0);
  const [productInfo, setProductInfo] = useState(null);
  const [isUnmountModal, setIsUnmountModal] = useState(false);
  const [sideModal, setSideModal] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);

  const params = useParams();
  const modalContent = {
    description: {
      className: "white-modal",
      title: "제품 설명",
      content: productInfo?.description,
    },
    size: {
      className: "white-modal",
      title: "치수",
      content: productInfo?.options.size,
    },
    cart: {
      className: "blue-modal",
      title: `${productInfo?.name} 제품이 장바구니에 추가되었습니다.`,
      content: (
        <Link to="/cart" className="side-modal-link">
          장바구니로 이동
        </Link>
      ),
    },
    wishlist: {
      className: "blue-modal",
      title: `${productInfo?.name} 제품이 위시리스트에 추가되었습니다.`,
      content: (
        <Link to="/wishlist" className="side-modal-link">
          위시리스트로 이동
        </Link>
      ),
    },
  };
  const openModal = i => {
    setImageModalIndex(i + 1);
  };
  const openSideModal = text => {
    setSideModal(text);
  };
  const closeModal = () => {
    setIsUnmountModal(true);
    setTimeout(() => {
      imageModalIndex !== 0 && setImageModalIndex(0);
      sideModal && setSideModal("");
      setIsUnmountModal(false);
    }, 300);
  };
  const addToWishList = () => {
    addWishList(params.productId, openSideModal("wishlist"));
    console.log(params.productId);
  };
  const addProductToCart = () => {
    addToCart(productInfo.optionId);
    openSideModal("cart");
  };
  const priceToString = price => {
    return parseInt(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }; // 세자리수마다 콤마 찍어주는 정규표현식
  const selectColor = e => {
    const { id } = e.target.dataset;
    setSelectedColor(parseInt(id));
  };
  useEffect(() => {
    getDetail(params.productId, setProductInfo);
  }, []);
  return (
    <>
      {imageModalIndex !== 0 && (
        <ImageModal
          images={productInfo?.images}
          imageModalIndex={imageModalIndex}
          setImageModalIndex={setImageModalIndex}
          closeModal={closeModal}
          isUnmountModal={isUnmountModal}
        />
      )}
      {sideModal !== "" && (
        <SideModal
          className={modalContent[sideModal].className}
          title={modalContent[sideModal].title}
          content={modalContent[sideModal].content}
          closeModal={closeModal}
          isUnmountModal={isUnmountModal}
        ></SideModal>
      )}
      <div className="detail-page">
        <section className="detail-content">
          <div className="detail-img">
            {productInfo?.images.map((productImage, i) => {
              return (
                <div
                  className="detail-img-wrapper"
                  key={productImage.id}
                  onClick={() => openModal(i)}
                >
                  <img
                    alt={`product${productImage.id}`}
                    src={productImage.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="product-number">
            <span className="product-number-title">제품 번호</span>
            <span className="product-number-content">{productInfo?.id}</span>
          </div>
          <div
            className="detail-description"
            onClick={() => openSideModal("description")}
          >
            <span className="detail-title">제품 설명</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          <div className="detail-size" onClick={() => openSideModal("size")}>
            <span className="detail-title">치수</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </section>
        <aside className="detail-info">
          <header className="detail-info-header">
            <div className="detail-name">{productInfo?.name}</div>
            <div className="detail-color">
              {productInfo?.options.color.map(colorName => {
                return (
                  <span key={colorName} className="color-name">
                    {colorName}
                  </span>
                );
              })}
            </div>
            <div className="detail-price">
              ₩ {priceToString(productInfo?.options.price)}원
            </div>
          </header>
          <div className="select-color">
            {productInfo?.options.color.map((color, index) => {
              return (
                <div
                  key={color}
                  className={`color ${
                    selectedColor === index ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={selectColor}
                  data-id={index}
                />
              );
            })}
          </div>
          <div className="how-to-buy">
            <span>어떻게 구매하시겠어요?</span>
            <ul className="how-to-buy-box">
              <li className="how-to-buy-list">
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                <div className="how-to-buy-content-wrapper">
                  <h4 className="how-to-buy-title">배송</h4>
                  <span className="how-to-buy-content">
                    구매 가능 여부 확인
                  </span>
                </div>
              </li>
              <li className="how-to-buy-list">
                <span className="material-symbols-outlined">store</span>
                <div className="how-to-buy-content-wrapper">
                  <h4 className="how-to-buy-title">매장</h4>
                  <span className="how-to-buy-content">
                    매장 재고 및 재입고 날짜 확인
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="add-to-cart">
            <button
              type="button"
              className="buy-btn"
              onClick={addProductToCart}
            >
              구매하기
            </button>
            <div className="heart-icon-wrapper" onClick={addToWishList}>
              <span className="material-symbols-outlined" data-name="wishlist">
                favorite
              </span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Detail;
