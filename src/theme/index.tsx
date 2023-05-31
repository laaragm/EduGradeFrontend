import { useMemo, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeOptions, ThemeProvider } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

type ThemeConfigProps = {
    children: ReactNode;
};

export function ThemeConfig({ children }: ThemeConfigProps) {
    const themeOptions: ThemeOptions = useMemo(
        () => ({
            palette,
            breakpoints,
            typography,
        }),
        []
    );

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
