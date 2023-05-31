import { styled } from "@mui/material/styles";

export const Wrapper = styled("header")(({ theme }) => ({
    background: theme.palette.background.default,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
