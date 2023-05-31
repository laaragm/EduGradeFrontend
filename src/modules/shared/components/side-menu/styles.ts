import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const SideMenuContainer = styled(Stack)(({ theme }) => ({
    background: theme.palette.secondary.main,
    borderRight: `5px solid ${theme.palette.primary.main}`,
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20%",
    left: 0,
}));

export const CustomLink = styled(Typography)(({ theme }) => ({
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
}));
