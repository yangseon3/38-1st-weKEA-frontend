import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideModal from "../../components/SideModal/SideModal";
import ImageModal from "./components/ImageModal";
import "./Detail.scss";

function Detail() {
  const [imageModalIndex, setImageModalIndex] = useState(0);
  const [productInfo, setProductInfo] = useState({
    id: "",
    name: "",
    thumbnail: "",
    description: "",
    category: "",
    images: [],
    options: {
      size: "",
      price: "",
      color: ["white", "black"],
    },
  });
  const [images, setImages] = useState([]);
  const [isUnmountModal, setIsUnmountModal] = useState(false);
  const [sideModal, setSideModal] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);

  const { id, name, description, options } = productInfo;
  const { size, price, color } = options;
  const modalContent = {
    description: {
      className: "side-modal",
      title: "제품 설명",
      content: description,
    },
    size: {
      className: "side-modal",
      title: "치수",
      content: size,
    },
    cart: {
      className: "side-modal-blue",
      title: `${name} 제품이 장바구니에 추가되었습니다.`,
      content: <Link to="/cart">장바구니로 이동</Link>,
    },
    wishlist: {
      className: "side-modal-blue",
      title: `${name} 제품이 위시리스트에 추가되었습니다.`,
      content: <Link to="/wishlist">위시리스트로 이동</Link>,
    },
  };
  const openModal = i => {
    setImageModalIndex(i + 1);
  };
  const openSideModal = e => {
    const { name } = e.target.dataset;
    setSideModal(name);
  };
  const closeModal = e => {
    setIsUnmountModal(true);
    setTimeout(() => {
      imageModalIndex !== 0 && setImageModalIndex(0);
      sideModal && setSideModal("");
      setIsUnmountModal(false);
    }, 300);
  };
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }; // 세자리수마다 콤마 찍어주는 정규표현식
  const selectColor = e => {
    const { id } = e.target.dataset;
    setSelectedColor(parseInt(id));
  };
  useEffect(() => {
    fetch("/data/detail.json")
      .then(response => response.json())
      .then(data => {
        setProductInfo(data);
        setImages([{ id: "thumbnail", url: data.thumbnail }, ...data.images]);
      });
  }, []);
  return (
    <>
      {imageModalIndex !== 0 && (
        <ImageModal
          images={images}
          imageModalIndex={imageModalIndex}
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
            <span className="product-number-content">{id}</span>
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
            <div className="detail-name">{name}</div>
            <div className="detail-color">
              {color[0]}, {color[1]}
            </div>
            <div className="detail-price">₩ {priceToString(price)}원</div>
          </header>
          <div className="select-color">
            <div
              className={`color ${selectedColor === 0 ? "selected" : ""}`}
              style={{ backgroundColor: color[0] }}
              onClick={selectColor}
              data-id="0"
            ></div>
            <div
              className={`color ${selectedColor === 1 ? "selected" : ""}`}
              style={{ backgroundColor: color[1] }}
              onClick={selectColor}
              data-id="1"
            ></div>
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
