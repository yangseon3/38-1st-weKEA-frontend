import React, { useState } from "react";
import "./Listpage.scss";
import ThumbNail from "./Thumbnail";

function Listpage() {
  const [isBoxVisible1, setIsBoxVisible1] = useState(false);
  const [isBoxVisible2, setIsBoxVisible2] = useState(false);
  // const test = ["a", "b", "c", "d", "1", "2", "3", "4"];
  function filterBoxToggle1() {
    setIsBoxVisible1(!isBoxVisible1);
  }
  function filterBoxToggle2() {
    setIsBoxVisible2(!isBoxVisible2);
  }

  function isClickOnBox(e) {
    e.stopPropagation();
    if (
      isBoxVisible1 == true &&
      !e.target.className.includes("drop-box") &&
      !e.target.className.includes("item") &&
      e.target.type != "radio"
    ) {
      setIsBoxVisible1(!isBoxVisible1);
    }
    if (
      isBoxVisible2 == true &&
      !e.target.className.includes("drop-box") &&
      !e.target.className.includes("item") &&
      e.target.type != "radio"
    ) {
      setIsBoxVisible2(!isBoxVisible2);
    }
  }
  return (
    <div className="listpage" onClick={isClickOnBox}>
      <div className="filter-bar">
        <div className="one cont">
          <div
            className="filter1-container filter-container"
            onClick={filterBoxToggle1}
          >
            <button className="button filter1">
              정렬
              {isBoxVisible1 ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isBoxVisible1 && (
              <div className="drop-box1 drop-box">
                <div className="item">
                  <span>가격 높은순</span> <input type="radio" name="radio1" />
                </div>
                <div className="item">
                  <span>가격 낮은순</span> <input type="radio" name="radio1" />
                </div>
                <div className="item">
                  <span>최신순</span>
                  <input type="radio" name="radio1" />
                </div>
                <div className="item">
                  <span>이름순</span>
                  <input type="radio" name="radio1" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="two cont">
          <div
            className="filter2-container filter-container"
            onClick={filterBoxToggle2}
          >
            <button className="button filter2">
              가격
              {isBoxVisible2 ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isBoxVisible2 && (
              <div className="drop-box2 drop-box">
                <div className="item">
                  <span>₩0 - 49,999</span>
                  <input type="radio" name="radio2" />
                </div>
                <div className="item">
                  <span>₩50,000 - 99,999</span>
                  <input type="radio" name="radio2" />
                </div>
                <div className="item">
                  <span>₩100,000 - 199,999</span>
                  <input type="radio" name="radio2" />
                </div>
                <div className="item">
                  <span>₩200,000 - 299,999</span>
                  <input type="radio" name="radio2" />
                </div>
                <div className="item">
                  <span>₩300,000 - 499,999</span>
                  <input type="radio" name="radio2" />
                </div>
                <div className="item">
                  <span>₩500,000 +</span>
                  <input type="radio" name="radio2" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container">
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
      <div className="button-frame">
        <div className="show-more-button">
          <button className="button">더 보기</button>
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
