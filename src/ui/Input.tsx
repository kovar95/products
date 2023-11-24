import { TextField, styled } from "@mui/material";

const Input = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000",
  },
}));

export default Input;
