import { Stack } from "@mui/material";
import { FC } from "react";

type Props = {
  amount: number;
  oldAmount?: number;
};

const Price: FC<Props> = ({ amount, oldAmount }) => {
  return (
    <Stack gap={1}>
      <Stack direction="row" alignItems="flex-start" gap={0.5}>
        <Stack fontSize={{ xs: 18, sm: 22 }}>{amount}</Stack>
        <Stack fontSize={11}>RSD</Stack>
      </Stack>
      {oldAmount && (
        <Stack
          direction="row"
          alignItems="flex-start"
          gap={0.5}
          color="orangered"
        >
          <Stack
            fontSize={{ xs: 14, sm: 18 }}
            sx={{ textDecoration: "line-through" }}
          >
            {oldAmount}
          </Stack>
          <Stack fontSize={9}>RSD</Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Price;
