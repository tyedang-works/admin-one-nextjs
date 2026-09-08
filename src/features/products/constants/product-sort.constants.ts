export const PRODUCT_SORT = {
  DEFAULT: "",
  TITLE_ASC: "title-asc",
  TITLE_DESC: "title-desc",
  PRICE_ASC: "price-asc",
  PRICE_DESC: "price-desc",
} as const;

export type ProductSortValue =
  (typeof PRODUCT_SORT)[keyof typeof PRODUCT_SORT];

export const PRODUCT_SORT_OPTIONS = [
  {
    label: "Default",
    value: PRODUCT_SORT.DEFAULT,
  },
  {
    label: "Title A → Z",
    value: PRODUCT_SORT.TITLE_ASC,
  },
  {
    label: "Title Z → A",
    value: PRODUCT_SORT.TITLE_DESC,
  },
  {
    label: "Price Low → High",
    value: PRODUCT_SORT.PRICE_ASC,
  },
  {
    label: "Price High → Low",
    value: PRODUCT_SORT.PRICE_DESC,
  },
] as const;