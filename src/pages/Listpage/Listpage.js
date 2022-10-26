import React, { useState, useEffect } from "react";
import "./Listpage.scss";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";

function Listpage() {
  const [productCardData, setProductCardData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMoreOffsetCount, setShowMoreOffsetCount] = useState(4);
  const sortBy = searchParams.get("sortBy");

  const SORTBY_LIST = [
    {
      id: 1,
      sortby: "가격 높은순",
      onclickfunction: sortByPriceDESC,
    },
    {
      id: 2,
      sortby: "가격 낮은순",
      onclickfunction: sortByPriceASC,
    },
    {
      id: 3,
      sortby: "최신순",
      onclickfunction: sortBynewest,
    },
    {
      id: 4,
      sortby: "이름순",
      onclickfunction: sortBynameASC,
    },
  ];

  const PRICE_RANGE_FOR_FILTERING = [
    {
      id: "1",
      pricerange: "0 - 49,999",
      onclickfunction: priceFilterRangeFrom0To49999,
    },
    {
      id: "2",
      pricerange: "50,000 - 99,999",
      onclickfunction: priceFilterRangeFrom50000To99999,
    },
    {
      id: "3",
      pricerange: "100,000 - 199,999",
      onclickfunction: priceFilterRangeFrom100000To199999,
    },
    {
      id: "4",
      pricerange: "200,000 - 299,999",
      onclickfunction: priceFilterRangeFrom200000To299999,
    },
    {
      id: "5",
      pricerange: "300,000 - 499,999",
      onclickfunction: priceFilterRangeFrom300000To499999,
    },
    {
      id: "6",
      pricerange: "500,000 +",
      onclickfunction: priceFilterRangeFrom500000,
    },
  ];

  const minPrice = searchParams.get("minPrice")
    ? searchParams.get("minPrice")
    : "0";
  const maxPrice = searchParams.get("maxPrice")
    ? searchParams.get("maxPrice")
    : "99999999";

  const apiAddress = `http://10.58.52.111:3000/categories/1?offset=0&limit=${showMoreOffsetCount}&sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

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
        console.log(productCardData);
      });
  }, [showMoreOffsetCount, sortBy, minPrice, maxPrice]);

  function showMoreButtonApiRequest() {
    setShowMoreOffsetCount(showMoreOffsetCount + 4);
    console.log(showMoreOffsetCount);
  }
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
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);
  const [isPriceFilterBoxVisible, setIsPriceFilterBoxVisible] = useState(false);

  function changeSortBoxBoolean() {
    setIsSortBoxVisible(!isSortBoxVisible);
  }
  function changePriceFilterBoxToggle() {
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
                <div className="total-drop-box drop-box">
                  {SORTBY_LIST.map(sortby => {
                    return (
                      <div className="drop-box-filter-element" key={sortby.id}>
                        <span className="filter-inneritem">
                          {sortby.sortby}
                        </span>{" "}
                        <input
                          type="radio"
                          name="total-filter-box-radio"
                          onClick={sortby.onclickfunction}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="price-filter-total-frame">
          <div
            className="price-filter-container filter-container"
            onClick={changePriceFilterBoxToggle}
          >
            <button className="filter-button">
              가격
              {isPriceFilterBoxVisible ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isPriceFilterBoxVisible && (
              <div className="price-filter-drop-box drop-box">
                {PRICE_RANGE_FOR_FILTERING.map(pricerange => {
                  return (
                    <div
                      className="drop-box-filter-element"
                      key={pricerange.id}
                    >
                      <span className="filter-inneritem">
                        ₩{pricerange.pricerange}
                      </span>
                      <input
                        type="radio"
                        name="price-filter-box-radio"
                        onClick={pricerange.onclickfunction}
                      />
                    </div>
                  );
                })}
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
