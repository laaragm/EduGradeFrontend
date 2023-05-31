import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { HEADER_SIZE } from "@/modules/shared/utils";

export const PageContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `calc(100vh - ${HEADER_SIZE})`,
    height: `calc(100vh - ${HEADER_SIZE})`,
    flexDirection: "column",
    padding: "0 0.5rem",
}));
