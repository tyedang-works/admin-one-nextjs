"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import {
  PRODUCT_SORT_OPTIONS,
  ProductSortValue,
} from "../constants/product-sort.constants";

interface ProductSortProps {
  value: ProductSortValue;
  onChange: (value: ProductSortValue) => void;
}
export default function ProductSort({ value, onChange }: ProductSortProps) {
  const handleChange = (event: SelectChangeEvent<ProductSortValue>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 220 }}>
      <InputLabel>Sort By</InputLabel>

      <Select value={value} label="Sort By" onChange={handleChange}>
        {PRODUCT_SORT_OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
