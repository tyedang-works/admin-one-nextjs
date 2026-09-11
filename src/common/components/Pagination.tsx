"use client";

import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <MuiPagination
      page={page}
      count={totalPages}
      onChange={(_, value) => onChange(value)}
    />
  );
}
