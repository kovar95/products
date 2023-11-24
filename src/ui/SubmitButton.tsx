import { Button, styled } from "@mui/material";

const SubmitButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "#000",
  borderRadius: 50,
  textTransform: "none",
  marginTop: 6,
  "&:hover": {
    backgroundColor: "GrayText",
  },
  "&.Mui-disabled": {
    backgroundColor: "gray",
  },
}));

export default SubmitButton;
