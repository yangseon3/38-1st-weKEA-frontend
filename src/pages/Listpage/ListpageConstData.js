export const SORTBY_LIST = [
  {
    id: 1,
    sortby: "가격 높은순",
    sortbyParam: "priceDESC",
  },
  {
    id: 2,
    sortby: "가격 낮은순",
    sortbyParam: "priceASC",
  },
  {
    id: 3,
    sortby: "최신순",
    sortbyParam: "newest",
  },
  {
    id: 4,
    sortby: "이름순",
    sortbyParam: "nameASC",
  },
];

export const PRICE_RANGE_FOR_FILTERING = [
  {
    id: "1",
    pricerange: "0 - 49,999",
    minPrice: "0",
    maxPrice: "49999",
  },
  {
    id: "2",
    pricerange: "50,000 - 99,999",
    minPrice: "50000",
    maxPrice: "99999",
  },
  {
    id: "3",
    pricerange: "100,000 - 199,999",
    minPrice: "100000",
    maxPrice: "199999",
  },
  {
    id: "4",
    pricerange: "200,000 - 299,999",
    minPrice: "200000",
    maxPrice: "299999",
  },
  {
    id: "5",
    pricerange: "300,000 - 499,999",
    minPrice: "300000",
    maxPrice: "499999",
  },
  {
    id: "6",
    pricerange: "500,000 +",
    minPrice: "500000",
    maxPrice: "9999999999",
  },
];
