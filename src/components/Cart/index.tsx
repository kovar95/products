"use client";

import { Button, Divider, Stack } from "@mui/material";
import { FC, Fragment } from "react";
import Item from "./Item";
import Order from "./Order";
import { useCart } from "@/providers/CartProvider";
import Link from "next/link";

const Cart: FC = () => {
  const { orderItems } = useCart();

  return (
    <Stack width="90%" padding={5} gap={3}>
      <h2>Tvoja korpa</h2>
      <Stack
        justifyContent="space-between"
        direction={{ xs: "column", md: "row" }}
        gap={2}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Stack width={{ xs: "100%", md: "65%" }} gap={3}>
          {!orderItems.length && (
            <Stack direction="row">
              Trenutno nemaš stavki u korpi. Idi na&nbsp;
              <Link href="/products" style={{ textDecoration: "underline" }}>
                Proizvode
              </Link>{" "}
            </Stack>
          )}
          {orderItems.map(({ item, amount }) => (
            <Fragment key={item.id}>
              <Item item={item} amount={amount} />
              <Divider />
            </Fragment>
          ))}
        </Stack>
        <Stack width={{ xs: "90%", sm: "70%", md: "30%" }}>
          <Order />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cart;
