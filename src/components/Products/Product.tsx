import ProductType from "@/types/Product";
import { IconButton, Stack, styled } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import { FC, useState } from "react";
import { useCart } from "@/providers/CartProvider";
import AmountController from "@/ui/AmountController";
import Price from "@/ui/Price";

const Card = styled(Stack)(() => ({
  "&:hover .korpa": {
    display: "flex",
  },
}));

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({ product }) => {
  const { title, image, price, id } = product;

  const { addItem, removeItem, increaseAmount, decreaseAmount, orderItems } =
    useCart();

  const cartAmount = orderItems.find(({ item }) => item.id === id)?.amount ?? 1;

  const [itemAmount, setItemAmount] = useState(cartAmount);

  const isAdded = orderItems.some((item) => item.item.id === id);

  const handleIncrease = () => {
    setItemAmount((prevAmount) => prevAmount + 1);
    // if item is already added, increase global amount
    if (isAdded) {
      increaseAmount(id);
    }
  };

  const handleDecrease = () => {
    setItemAmount((prevAmount) =>
      prevAmount !== 1 ? prevAmount - 1 : prevAmount
    );
    // if item is already added, decrease global amount
    if (isAdded) {
      decreaseAmount(id);
    }
  };

  const toggleItem = () => {
    if (isAdded) {
      removeItem(id);
    } else {
      addItem(product, itemAmount);
    }
  };

  return (
    <Card minWidth="230px" width="24%" gap={2} marginBottom={10}>
      <Stack
        height="100%"
        bgcolor="#f0f0f0"
        position="relative"
        sx={{
          "& img": {
            position: "relative !important",
            width: "100%",
          },
        }}
      >
        <Image src={image} alt={title} fill unoptimized />
        <Stack
          direction="row"
          padding={1}
          gap={1}
          position="absolute"
          bottom={0}
          className="korpa"
          display="none"
        >
          <AmountController
            amount={itemAmount}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
          <Stack>
            <IconButton
              sx={{ backgroundColor: isAdded ? "#d32f2f" : "#000" }}
              onClick={toggleItem}
            >
              <ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <Stack fontSize={18} fontWeight={700}>
          {title}
        </Stack>
        <Price amount={price} oldAmount={product?.oldPrice} />
      </Stack>
    </Card>
  );
};

export default Product;
