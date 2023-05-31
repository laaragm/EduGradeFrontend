import { styled } from "@mui/material/styles";

export const Wrapper = styled("header")(({ theme }) => ({
    background: `linear-gradient(71.17deg, ${theme.palette.background.default} 19.35%, ${theme.palette.primary.light} 90.12%)`,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
