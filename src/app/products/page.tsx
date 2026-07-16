import ProductCard from "@/features/products/components/ProductCard";
import ProductList from "@/features/products/components/ProductList";
import { Grid } from "@mui/material";

export default function Page() {
  return (
    <Grid container spacing={0}>
      <Grid size={12}>
        <ProductCard />
      </Grid>

      <Grid size={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
}
