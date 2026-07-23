"use client";

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";

import { useCategories } from "../hooks/useCategories";

interface ProductCategoryFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ProductCategoryFilter({
    value,
    onChange,
}: ProductCategoryFilterProps) {
    const { data: categories = [] } = useCategories();

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <FormControl size="small" sx={{ minWidth: 220 }}>
            <InputLabel>Category</InputLabel>

            <Select
                value={value}
                label="Category"
                onChange={handleChange}
            >
                <MenuItem value="">
                    All Categories
                </MenuItem>

                {categories.map((category) => (
                    <MenuItem
                        key={category.slug}
                        value={category.slug}
                    >
                        {category.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}