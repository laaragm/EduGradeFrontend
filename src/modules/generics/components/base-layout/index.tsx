import { ReactNode } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Typography from "@mui/material/Typography";

import { ThemeConfig } from "@/theme";
import { ScrollToTop } from "@/modules/shared/components";
import { Header } from "../header";
import "react-toastify/dist/ReactToastify.css";
import { Wrapper } from "./styles";

interface BaseLayoutProps {
    children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
    const router = useRouter();

    return (
        <ThemeConfig>
            <Wrapper>
                <ScrollToTop />
                {router.isReady && <Header />}
                {children}
                <Typography variant="body4" component="div">
                    <ToastContainer position="bottom-right" autoClose={3000} closeOnClick pauseOnHover />
                </Typography>
            </Wrapper>
        </ThemeConfig>
    );
}
