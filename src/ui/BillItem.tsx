import { Stack } from "@mui/material";
import { FC } from "react";
import Price from "./Price";

type Props = {
  amount?: number;
  title: string;
};

const BillItem: FC<Props> = ({ amount, title }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack>{title}</Stack>
      {amount !== undefined ? (
        <Price amount={amount} />
      ) : (
        <Stack fontSize={12}>Besplatno</Stack>
      )}
    </Stack>
  );
};

export default BillItem;
