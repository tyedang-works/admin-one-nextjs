"use client";

import PrimaryButton from "@/common/button/PrimaryButton";
import AddIcon from '@mui/icons-material/Add';
import { Stack, Typography } from "@mui/material";

export default function ProductHeader() {

    return (
        <Stack
            direction={"row"}
            spacing={2}
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <Typography variant="h4">Products</Typography>
            <PrimaryButton><AddIcon />Add Product</PrimaryButton>
        </Stack>
    );
}