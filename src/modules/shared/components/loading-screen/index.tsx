import CircularProgress from "@mui/material/CircularProgress";
import { SxProps } from "@mui/material/styles";

import { Wrapper } from "./styles";

interface LoadingScreenProps {
    fullPageCentralized?: boolean;
    size?: number;
    sx?: SxProps;
}

export function LoadingScreen({ fullPageCentralized = false, size = 80, ...other }: LoadingScreenProps) {
    return (
        <Wrapper fullPageCentralized={fullPageCentralized} {...other}>
            <CircularProgress size={size} />
        </Wrapper>
    );
}
