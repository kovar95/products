import { FC } from "react";
import Product from "@/types/Product";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import { useCart } from "@/providers/CartProvider";
import AmountController from "@/ui/AmountController";
import Price from "@/ui/Price";

type Props = {
  item: Product;
  amount: number;
};

const Item: FC<Props> = ({ item, amount }) => {
  const { title, image, weight, price, id } = item;
  const { removeItem, increaseAmount, decreaseAmount } = useCart();

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" gap={5}>
        <Stack
          height="100%"
          width="100%"
          maxWidth={230}
          maxHeight={230}
          bgcolor="#f0f0f0"
          position="relative"
          display={{ xs: "none", sm: "flex" }}
          sx={{
            "& img": {
              position: "relative !important",
              width: "100%",
            },
          }}
        >
          <Image src={image} alt={title} fill unoptimized />
        </Stack>
        <Stack justifyContent="space-between" gap={1}>
          <Stack>
            <h3>{title}</h3>
            <Stack>{weight}</Stack>
          </Stack>
          <Stack direction="row" alignItems="flex-end" gap={2}>
            <AmountController
              amount={amount}
              onDecrease={() => decreaseAmount(id)}
              onIncrease={() => increaseAmount(id)}
              withBorder
            />
            <Stack>
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: 18,
                  padding: 0,
                  color: "inherit",
                  textDecoration: "underline",
                }}
                onClick={() => removeItem(id)}
              >
                Ukloni
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Price amount={price} oldAmount={item?.oldPrice} />
    </Stack>
  );
};

export default Item;
