import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
    width: "100%",
    background: theme.palette.primary.main,
    height: "3.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
}));
