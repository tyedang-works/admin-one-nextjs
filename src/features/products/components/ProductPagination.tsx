"use client";

import { Pagination } from "@mui/material";

interface ProductPaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}

export default function ProductPagination({ page, totalPages, onChange }: ProductPaginationProps) {
    return (
        <Pagination
            page={page}
            count={totalPages}
            onChange={(_, value) => onChange(value)}
        />
    );
}