import { styled } from "@mui/material/styles";

interface WrapperProps {
    fullPageCentralized: boolean;
}

export const Wrapper = styled("div")<WrapperProps>(({ theme, fullPageCentralized }) => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    ...(fullPageCentralized ? { top: 0, left: 0, width: "100%", position: "fixed", zIndex: 1 } : {}),
}));
