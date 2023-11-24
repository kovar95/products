"use client";

import { Stack } from "@mui/material";
import { FC } from "react";
import Product from "./Product";
import { products } from "@/constants";

const Products: FC = () => {
  return (
    <Stack width="90%" padding={5} gap={2}>
      <Stack direction="row" gap={2} alignItems="flex-end">
        <Stack fontWeight={700} fontSize={24}>
          Svi proizvodi
        </Stack>
        <Stack color="GrayText">{products.length} proizvoda</Stack>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
      >
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Products;
