import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(Select)(({ theme }) => ({
    height: "2.688rem",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
        minWidth: "100%",
    },
}));
