import { ReactNode } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Typography from "@mui/material/Typography";

import { ThemeConfig } from "@/theme";
import { ScrollToTop } from "@/modules/shared/components";
import { Header } from "../header";
import "react-toastify/dist/ReactToastify.css";

interface BaseLayoutProps {
    children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
    const router = useRouter();

    return (
        <ThemeConfig>
            <ScrollToTop />
            {router.isReady && <Header />}
            {children}
            <Typography variant="body1" component="div">
                <ToastContainer position="bottom-right" autoClose={3000} closeOnClick pauseOnHover />
            </Typography>
        </ThemeConfig>
    );
}
