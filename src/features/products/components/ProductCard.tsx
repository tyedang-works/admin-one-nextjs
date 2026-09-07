"use client";

import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../types/product.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, removeFavorite } from "@/store/slices/favorite.slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  product: Product;
}
export default function ProductCard(props: Props) {
  const { product } = props;
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.favorite.favoriteIds.includes(product.id),
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product.id));
    }
  };

  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Stack
          sx={{
            gap: 1,
          }}
        >
          <Typography variant="h6">{product.title}</Typography>

          <Typography variant="body2" color="text.secondary">
            Price: ${product.price.toFixed(2)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
        </Stack>

        <Stack>
          <IconButton
            onClick={handleFavoriteClick}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
