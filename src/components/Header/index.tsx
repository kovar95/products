"use client";

import { FC } from "react";
import { IconButton, Stack } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartProvider";

const Header: FC = () => {
  const router = useRouter();
  const { orderItems } = useCart();

  return (
    <Stack
      position="fixed"
      padding="5px 70px"
      width="100vw"
      bgcolor="#F0F0F0"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      zIndex={2}
    >
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={40}
        onClick={() => router.push("/products")}
      />
      <IconButton color="inherit" onClick={() => router.push("/cart")}>
        {!!orderItems.length && (
          <Stack position="absolute" top={18} fontSize={10}>
            {orderItems.length}
          </Stack>
        )}
        <ShoppingBagOutlinedIcon />
      </IconButton>
    </Stack>
  );
};

export default Header;
