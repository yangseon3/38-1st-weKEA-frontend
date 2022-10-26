import React, { useState, useEffect } from "react";
import "./Listpage.scss";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

function Listpage() {
  const [productCardData, setProductCardData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMoreOffsetCount, setShowMoreOffsetCount] = useState(4);
  const sortBy = searchParams.get("sortBy");

  const minPrice = searchParams.get("minPrice")
    ? searchParams.get("minPrice")
    : "0";
  const maxPrice = searchParams.get("maxPrice")
    ? searchParams.get("maxPrice")
    : "99999999";

  const apiAddress = `http://10.58.52.111:3000/categories/1?offset=0&limit=${showMoreOffsetCount}&sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  //api호출
  useEffect(() => {
    fetch(apiAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductCardData(data.getProductsByCategoryId);
        console.log(apiAddress);
      });
  }, [showMoreOffsetCount, sortBy, minPrice, maxPrice]);

  //더보기버튼 : 클릭시 limit 개수만 4개씩 늘림
  function showMoreButtonApiRequest() {
    setShowMoreOffsetCount(showMoreOffsetCount + 4);
    console.log(productCardData);
    console.log(showMoreOffsetCount);
  }
  // sort 체크박스 : 클릭시 쿼리스트링 sortBy를 각각 변경
  function sortByPriceASC() {
    searchParams.set("sortBy", "priceASC");
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  function sortByPriceDESC() {
    searchParams.set("sortBy", "priceDESC");
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  function sortBynewest() {
    searchParams.set("sortBy", "newest");
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  function sortBynameASC() {
    searchParams.set("sortBy", "nameASC");
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }

  //가격 레인지 체크박스 누를때 : 쿼리스트링 각각 추가
  function priceFilterRangeFrom0To49999() {
    searchParams.set("minPrice", 0);
    searchParams.set("maxPrice", 49999);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }

  function priceFilterRangeFrom50000To99999() {
    searchParams.set("minPrice", 50000);
    searchParams.set("maxPrice", 99999);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }

  function priceFilterRangeFrom100000To199999() {
    searchParams.set("minPrice", 100000);
    searchParams.set("maxPrice", 199999);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  function priceFilterRangeFrom200000To299999() {
    searchParams.set("minPrice", 200000);
    searchParams.set("maxPrice", 299999);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  function priceFilterRangeFrom300000To499999() {
    searchParams.set("minPrice", 300000);
    searchParams.set("maxPrice", 499999);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  function priceFilterRangeFrom500000() {
    searchParams.set("minPrice", 500000);
    searchParams.set("maxPrice", 99999999);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }
  /////////////////////////////이 밑은 단순 ui 구현 함수
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);
  const [isPriceFilterBoxVisible, setIsPriceFilterBoxVisible] = useState(false);

  function changeSortBoxBoolean() {
    setIsSortBoxVisible(!isSortBoxVisible);
  }
  function priceFilterBoxToggle() {
    setIsPriceFilterBoxVisible(!isPriceFilterBoxVisible);
  }

  function isClickOnBox(e) {
    e.stopPropagation();
    if (
      isSortBoxVisible === true &&
      !e.target.className.includes("drop-box") &&
      !e.target.className.includes("filter-inneritem") &&
      e.target.type !== "radio"
    ) {
      setIsSortBoxVisible(!isSortBoxVisible);
    }
    if (
      isPriceFilterBoxVisible === true &&
      !e.target.className.includes("drop-box") &&
      !e.target.className.includes("filter-inneritem") &&
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
            onClick={changeSortBoxBoolean}
          >
            <button className="filter-button">
              정렬
              {isSortBoxVisible ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isSortBoxVisible && (
              <div className="total-drop-box drop-box">
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">가격 높은순</span>{" "}
                  <input
                    type="radio"
                    name="total-filter-box-radio"
                    onClick={sortByPriceDESC}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">가격 낮은순</span>{" "}
                  <input
                    type="radio"
                    name="total-filter-box-radio"
                    onClick={sortByPriceASC}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">최신순</span>
                  <input
                    type="radio"
                    name="total-filter-box-radio"
                    onClick={sortBynewest}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">이름순</span>
                  <input
                    type="radio"
                    name="total-filter-box-radio"
                    onClick={sortBynameASC}
                  />
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
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">₩0 - 49,999</span>
                  <input
                    type="radio"
                    name="price-filter-box-radio"
                    onClick={priceFilterRangeFrom0To49999}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">₩50,000 - 99,999</span>
                  <input
                    type="radio"
                    name="price-filter-box-radio"
                    onClick={priceFilterRangeFrom50000To99999}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">₩100,000 - 199,999</span>
                  <input
                    type="radio"
                    name="price-filter-box-radio"
                    onClick={priceFilterRangeFrom100000To199999}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">₩200,000 - 299,999</span>
                  <input
                    type="radio"
                    name="price-filter-box-radio"
                    onClick={priceFilterRangeFrom200000To299999}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">₩300,000 - 499,999</span>
                  <input
                    type="radio"
                    name="price-filter-box-radio"
                    onClick={priceFilterRangeFrom300000To499999}
                  />
                </div>
                <div className="drop-box-filter-element">
                  <span className="filter-inneritem">₩500,000 +</span>
                  <input
                    type="radio"
                    name="price-filter-box-radio"
                    onClick={priceFilterRangeFrom500000}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="ProductCard-component-container">
        {productCardData.map(productInfo => {
          return (
            <ProductCard
              key={productInfo.optionsId}
              optionsId={productInfo.optionsId}
              url={productInfo.productThumbnail}
              productId={productInfo.productId}
              title={productInfo.productName}
              size={productInfo.productSize}
              price={productInfo.productPrice}
              color={productInfo.productColor}
            />
          );
        })}
      </div>
      <div className="show-more-button-container">
        <div className="show-more-button-frame">
          <button
            className="show-more-button"
            onClick={showMoreButtonApiRequest}
          >
            더 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Listpage;
