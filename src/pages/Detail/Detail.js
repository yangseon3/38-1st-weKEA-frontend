import React, { useState } from "react";
import ImageModal from "./components/ImageModal";
import SideModal from "./components/SideModal";
import "./Detail.scss";

function Detail() {
  const [isModalOpen, setIsModalOpen] = useState(0);
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
  ]);
  const [isUnmountModal, setIsUnmountModal] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const openModal = i => {
    setIsModalOpen(i + 1);
  };
  const openDescription = () => {
    setIsDescriptionOpen(true);
  };
  const openSize = () => {
    setIsSizeOpen(true);
  };
  const closeModal = e => {
    e.stopPropagation();
    const { id } = e.target.dataset;
    if (id === "close-modal") {
      setIsUnmountModal(true);
      setTimeout(() => {
        isModalOpen !== 0 && setIsModalOpen(0);
        isDescriptionOpen && setIsDescriptionOpen(false);
        isSizeOpen && setIsSizeOpen(false);
        setIsUnmountModal(false);
      }, 300);
    }
  };
  return (
    <>
      {isModalOpen !== 0 && (
        <ImageModal
          images={images}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          isUnmountModal={isUnmountModal}
        />
      )}
      {isDescriptionOpen && (
        <SideModal
          className={"side-modal-content"}
          title={"제품 설명"}
          content={"여기에 제품 설명이 들어갑니다."}
          closeModal={closeModal}
          isUnmountModal={isUnmountModal}
        />
      )}
      {isSizeOpen && (
        <SideModal
          className={"side-modal-content"}
          title={"치수"}
          content={"100x200"}
          closeModal={closeModal}
          isUnmountModal={isUnmountModal}
        />
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
          <div className="detail-description" onClick={openDescription}>
            <span>제품 설명</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
          <div className="detail-size" onClick={openSize}>
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
            <button type="button" className="buy-btn">
              구매하기
            </button>
            <div className="heart-icon-wrapper">
              <span className="material-symbols-outlined">favorite</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Detail;
