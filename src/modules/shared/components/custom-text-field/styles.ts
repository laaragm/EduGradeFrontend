import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.grey[50]}`,
    borderRadius: "3px",
    padding: "0.3rem",
}));
