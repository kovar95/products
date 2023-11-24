import { FC } from "react";
import { IconButton, Stack } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  amount: number;
  onDecrease: () => void;
  onIncrease: () => void;
  withBorder?: boolean;
};

const AmountController: FC<Props> = ({
  amount,
  onDecrease,
  onIncrease,
  withBorder,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      borderRadius={5}
      border={withBorder ? "1px solid" : "inherit"}
      bgcolor={withBorder ? "inherit" : "#fff"}
    >
      <Stack>
        <IconButton color="inherit" onClick={onDecrease}>
          <RemoveIcon />
        </IconButton>
      </Stack>
      <Stack>{amount}</Stack>
      <Stack>
        <IconButton color="inherit" onClick={onIncrease}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AmountController;
