import React, { useState } from "react";
import "./Listpage.scss";

function Listpage() {
  const [isBoxVisible1, setIsBoxVisible1] = useState(false);
  const [isBoxVisible2, setIsBoxVisible2] = useState(false);

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
      <div className="component-area">
        {LIST_PAGE_CONST_DATA.map(item => {
          return <div className="item">gdgd</div>;
        })}
      </div>
      <div className="show-more-button">더보기</div>
    </div>
  );
}

export default Listpage;

const LIST_PAGE_CONST_DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];
