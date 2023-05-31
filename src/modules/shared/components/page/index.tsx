import { forwardRef, ReactNode, Suspense } from "react";
import { BoxProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { PageContainer } from "./styles";

interface PageProps extends BoxProps {
    children: ReactNode;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children, ...other }, ref) => {
    return (
        <PageContainer ref={ref} {...other}>
            <Suspense fallback={<CircularProgress size={60} />}>{children}</Suspense>
        </PageContainer>
    );
});

Page.displayName = "Page";
