import React, { useState, useEffect } from "react";
import "./Listpage.scss";
import { useSearchParams, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { SORTBY_LIST, PRICE_RANGE_FOR_FILTERING } from "./ListpageConstData";

function Listpage() {
  const [productCardData, setProductCardData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMoreOffsetCount, setShowMoreOffsetCount] = useState(4);

  const sortBy = searchParams.get("sortBy");
  const params = useParams();
  const categoryId = params.categoryId;

  const minPrice = searchParams.get("minPrice")
    ? searchParams.get("minPrice")
    : "1";
  const maxPrice = searchParams.get("maxPrice")
    ? searchParams.get("maxPrice")
    : "99999999";

  useEffect(() => {
    fetch(
      `http://10.58.52.155:3000/categories/${categoryId}?offset=0&limit=${showMoreOffsetCount}&sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        setProductCardData(data.getProductsByCategoryId);
      });
  }, [showMoreOffsetCount, sortBy, minPrice, maxPrice]);

  function showMoreButtonApiRequest() {
    setShowMoreOffsetCount(showMoreOffsetCount + 4);
  }

  function sortByFunction(sortby) {
    searchParams.set("sortBy", sortby);
    setSearchParams(searchParams);
    setShowMoreOffsetCount(4);
  }

  function changeQueryStringValue(minPrice, maxPrice) {
    searchParams.set("minPrice", minPrice);
    searchParams.set("maxPrice", maxPrice);
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

  function listpageOnclickFunction() {
    setIsSortBoxVisible(false);
    setIsPriceFilterBoxVisible(false);
  }
  return (
    <div className="listpage" onClick={listpageOnclickFunction}>
      <div className="filter-bar">
        <div className="sort-filter-frame" onClick={e => e.stopPropagation()}>
          <div
            className="sort-filter-container filter-container"
            onClick={changeSortBoxBoolean}
          >
            <button className="filter-button">
              정렬
              {isSortBoxVisible ? "▲" : "▼"}
            </button>
          </div>
          <div>
            {isSortBoxVisible && (
              <div className="sort-drop-box drop-box">
                <div className="sort-drop-box drop-box">
                  {SORTBY_LIST.map(sortby => {
                    return (
                      <div className="drop-box-filter-element" key={sortby.id}>
                        <span className="filter-inneritem">
                          {sortby.sortby}
                        </span>{" "}
                        <input
                          type="radio"
                          name="sort-filter-box-radio"
                          onClick={() => {
                            sortByFunction(sortby.sortbyParam);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="price-filter-total-frame"
          onClick={e => e.stopPropagation()}
        >
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
                        onClick={() => {
                          changeQueryStringValue(
                            pricerange.minPrice,
                            pricerange.maxPrice
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="productCard-component-container">
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
