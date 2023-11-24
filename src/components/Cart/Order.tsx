import { FC } from "react";
import { Divider, Stack } from "@mui/material";
import SubmitButton from "@/ui/SubmitButton";
import { useCart } from "@/providers/CartProvider";
import BillItem from "@/ui/BillItem";

const Order: FC = () => {
  const { orderItems } = useCart();

  const oldPrice = orderItems.reduce(
    (sum, { item, amount }) => sum + amount * (item?.oldPrice ?? item.price),
    0
  );

  const discount = orderItems
    .filter((item) => !!item.item?.oldPrice)
    .reduce(
      (sum, { item, amount }) => sum + amount * (item.price - item.oldPrice!),
      0
    );

  const totalPrice = orderItems.reduce(
    (sum, item) => sum + item.amount * item.item.price,
    0
  );

  return (
    <Stack bgcolor="#F6F6F6" padding={3} gap={4} borderRadius={1}>
      <h3>Tvoja narudžbina</h3>
      <Stack gap={2.5}>
        <BillItem amount={oldPrice} title="Ukupno" />
        <BillItem amount={discount} title="Ušteda" />
        <BillItem title="Isporuka Daily Express*" />
        <Divider />
      </Stack>
      <Stack>
        <BillItem amount={totalPrice} title="Ukupno za uplatu" />
        <Stack fontSize={12}>Cena je sa uključenim PDV-om</Stack>
      </Stack>
      <SubmitButton sx={{ fontSize: { xs: 12, md: 18 }, marginBottom: 15 }}>
        Prijavi se za brže plaćanje
      </SubmitButton>
    </Stack>
  );
};

export default Order;
