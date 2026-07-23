import {
  PRODUCT_SORT,
  ProductSortValue,
} from "./product-sort.constants";

export const PRODUCT_SORT_MAPPING: Record<
  ProductSortValue,
  {
    sortBy?: "title" | "price";
    order?: "asc" | "desc";
  }
> = {
  [PRODUCT_SORT.DEFAULT]: {},

  [PRODUCT_SORT.TITLE_ASC]: {
    sortBy: "title",
    order: "asc",
  },

  [PRODUCT_SORT.TITLE_DESC]: {
    sortBy: "title",
    order: "desc",
  },

  [PRODUCT_SORT.PRICE_ASC]: {
    sortBy: "price",
    order: "asc",
  },

  [PRODUCT_SORT.PRICE_DESC]: {
    sortBy: "price",
    order: "desc",
  },
};