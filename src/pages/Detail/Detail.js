import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "./components/ImageModal";
import SideModal from "./components/SideModal";
import "./Detail.scss";

function Detail() {
  const [isIamgeModalOpen, setIsIamgeModalOpen] = useState(0);
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg",
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2021/08/07/21/00/beach-6529372_1280.jpg",
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/photo/2020/08/08/19/29/church-5473775_1280.jpg",
    },
    // this is example -> 받아온 데이터로 교체할 예정
  ]);
  const [isUnmountModal, setIsUnmountModal] = useState(false);
  const [sideModal, setSideModal] = useState("");
  const modalContent = {
    description: {
      className: "side-modal-content",
      title: "제품 설명",
      content: "설명에 해당하는 변수가 들어갈 예정입니다.",
    },
    size: {
      className: "side-modal-content",
      title: "치수",
      content: "치수에 해당하는 변수가 들어갈 예정입니다.",
    },
    cart: {
      className: "cart-modal-contentsid",
      title: ` 제품이 장바구니에 추가되었습니다.`, // 앞에 상품 이름 변수 추가 예정
      content: <Link to="/cart">장바구니로 이동</Link>,
    },
    wishlist: {
      className: "wishlist-modal-content",
      title: ` 제품이 위시리스트에 추가되었습니다.`, // 앞에 상품 이름 변수 추가 예정
      content: <Link to="/wishlist">위시리스트로 이동</Link>,
    },
  };
  const openModal = i => {
    setIsIamgeModalOpen(i + 1);
  };
  const openSideModal = e => {
    const { name } = e.target.dataset;
    setSideModal(name);
  };
  const closeModal = e => {
    e.stopPropagation();
    const { id } = e.target.dataset;
    if (id === "close-modal") {
      setIsUnmountModal(true);
      setTimeout(() => {
        isIamgeModalOpen !== 0 && setIsIamgeModalOpen(0);
        sideModal && setSideModal("");
        setIsUnmountModal(false);
      }, 300);
    }
  };
  return (
    <>
      {isIamgeModalOpen !== 0 && (
        <ImageModal
          images={images}
          isIamgeModalOpen={isIamgeModalOpen}
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
        <header></header>
        <section className="detail-content">
          <div className="detail-img">
            {images.map((img, i) => {
              return (
                <div
                  className="detail-img-wrapper"
                  key={img.id}
                  onClick={() => openModal(i)}
                >
                  <img alt={img.id} src={img.url} />
                </div>
              );
            })}
          </div>
          <div className="product-number">
            <span className="product-number-title">제품 번호</span>
            <span className="product-number-content">1</span>
          </div>
          <div
            className="detail-description"
            onClick={openSideModal}
            data-name="description"
          >
            <span>제품 설명</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          <div className="detail-size" onClick={openSideModal} data-name="size">
            <span>치수</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </section>
        <aside className="detail-info">
          <header>
            <div className="detail-name">Example</div>
            <div className="detail-color">블랙,화이트</div>
            <div className="detail-price">₩ 100,000원</div>
          </header>
          <div className="select-color">
            <div className="color"></div>
            <div className="color"></div>
          </div>
          <div className="how-to-buy">
            <span>어떻게 구매하시겠어요?</span>
            <ul className="how-to-buy-box">
              <li>
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                <div>
                  <h4>배송</h4>
                  <span>구매 가능 여부 확인</span>
                </div>
              </li>
              <li>
                <span className="material-symbols-outlined">store</span>
                <div>
                  <h4>매장</h4>
                  <span>매장 재고 및 재입고 날짜 확인</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="add-to-cart">
            <button
              type="button"
              className="buy-btn"
              onClick={openSideModal}
              data-name="cart"
            >
              구매하기
            </button>
            <div className="heart-icon-wrapper">
              <span
                className="material-symbols-outlined"
                onClick={openSideModal}
                data-name="wishlist"
              >
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
