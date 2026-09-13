"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, removeFavorite } from "@/store/slices/favorite.slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../types/product.types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorite.favoriteIds.includes(product.id),
  );

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product.id));
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        overflow: "hidden",
        borderRadius: 2,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      {/* Product image */}
      <Stack
        sx={{
          position: "relative",
          aspectRatio: "4 / 3",
          bgcolor: "action.hover",
        }}
      >
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Favorite */}
        <IconButton
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            bgcolor: "rgba(255, 255, 255, 0.92)",
            color: isFavorite ? "error.main" : "text.secondary",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
            "&:hover": {
              bgcolor: "common.white",
            },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </IconButton>
      </Stack>

      <CardContent
        sx={{
          p: 2,
          "&:last-child": {
            pb: 2,
          },
        }}
      >
        <Stack sx={{ gap: 1.25 }}>
          {/* Category */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {product.category}
          </Typography>

          {/* Title */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.title}
          </Typography>

          {/* Rating */}
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 0.75,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "0.875rem",
                color: "rgb(245, 166, 35)",
              }}
            >
              ★
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.rating.toFixed(1)}
            </Typography>
          </Stack>

          {/* Price */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
