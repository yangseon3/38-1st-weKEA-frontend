import React, { useState } from "react";
import "./Listpage.scss";
import ThumbNail from "./Thumbnail";

function Listpage() {
  const [isTotalFilterBoxVisible, setIsTotalFilterBoxVisible] = useState(false);
  const [isPriceFilterBoxVisible, setIsPriceFilterBoxVisible] = useState(false);

  function totalFilterBoxToggle() {
    setIsTotalFilterBoxVisible(!isTotalFilterBoxVisible);
  }
  function priceFilterBoxToggle() {
    setIsPriceFilterBoxVisible(!isPriceFilterBoxVisible);
  }

  function isClickOnBox(e) {
    e.stopPropagation();
    if (
      isTotalFilterBoxVisible === true &&
      !e.target.className.includes("drop-box") &&
      !e.target.className.includes("item") &&
      e.target.type !== "radio"
    ) {
      setIsTotalFilterBoxVisible(!isTotalFilterBoxVisible);
    }
    if (
      isPriceFilterBoxVisible === true &&
      !e.target.className.includes("drop-box") &&
      !e.target.className.includes("item") &&
      e.target.type !== "radio"
    ) {
      setIsPriceFilterBoxVisible(!isPriceFilterBoxVisible);
    }
  }
  return (
    <div className="listpage" onClick={isClickOnBox}>
      <div className="filter-bar">
        <div className="total-filter-frame">
          <div
            className="total-filter-container filter-container"
            onClick={totalFilterBoxToggle}
          >
            <button className="filter-button">
              정렬
              {isTotalFilterBoxVisible ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isTotalFilterBoxVisible && (
              <div className="total-drop-box drop-box">
                <div className="item">
                  <span className="filter-inneritem">가격 높은순</span>{" "}
                  <input type="radio" name="total-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">가격 낮은순</span>{" "}
                  <input type="radio" name="total-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">최신순</span>
                  <input type="radio" name="total-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">이름순</span>
                  <input type="radio" name="total-filter-box-radio" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="price-filter-total-frame">
          <div
            className="price-filter-container filter-container"
            onClick={priceFilterBoxToggle}
          >
            <button className="filter-button">
              가격
              {isPriceFilterBoxVisible ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isPriceFilterBoxVisible && (
              <div className="price-filter-drop-box drop-box">
                <div className="item">
                  <span className="filter-inneritem">₩0 - 49,999</span>
                  <input type="radio" name="price-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">₩50,000 - 99,999</span>
                  <input type="radio" name="price-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">₩100,000 - 199,999</span>
                  <input type="radio" name="price-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">₩200,000 - 299,999</span>
                  <input type="radio" name="price-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">₩300,000 - 499,999</span>
                  <input type="radio" name="price-filter-box-radio" />
                </div>
                <div className="item">
                  <span className="filter-inneritem">₩500,000 +</span>
                  <input type="radio" name="price-filter-box-radio" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="thumbnail-component-container">
        {TEST_CONST.map(item => {
          return (
            <ThumbNail
              key={item.id}
              url={item.url}
              id={item.id}
              title={item.title}
              size={item.size}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="show-more-button-container">
        <div className="show-more-button-frame">
          <button className="show-more-button">더 보기</button>
        </div>
      </div>
    </div>
  );
}

export default Listpage;

const TEST_CONST = [
  {
    url: "https://picsum.photos/200",
    id: "1",
    price: "1234원",
    size: "big",
    title: "하하",
  },
  {
    url: "https://picsum.photos/200",
    id: "2",
    price: "3마넌",
    size: "엄청큼",
    title: "11",
  },
  {
    url: "https://picsum.photos/200",
    id: "3",
    price: "14만",
    size: "xxx",
    title: "소파",
  },
  {
    url: "https://picsum.photos/200",
    id: "4",
    price: "40만언",
    size: "ㄸㄷ",
    title: "ㅋㅋ",
  },
  {
    url: "https://picsum.photos/200",
    id: "5",
    price: "ㅇㅇㅇ",
    size: "aasd3213213f",
    title: "11",
  },
  {
    url: "https://picsum.photos/200",
    id: "6",
    price: "ㄹㅇㄹㅇㄹ",
    size: "333",
    title: "4343",
  },
  {
    url: "https://picsum.photos/200",
    id: "7",
    price: "ㅍㅇㅍㅇ",
    size: "aasdf",
    title: "33",
  },
  {
    url: "https://picsum.photos/200",
    id: "8",
    price: "ㅋㅋㅋㅋ",
    size: "aasdf",
    title: "555",
  },
  {
    url: "https://picsum.photos/200",
    id: "9",
    price: "ㅇㄹㄹㅇ",
    size: "aasdf",
    title: "ㅁㅁㅁ",
  },
];
