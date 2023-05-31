import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface CustomButtonProps extends ButtonProps {
    loading?: boolean;
    children: ReactNode;
}

export function CustomButton({
    loading,
    children,
    color = "primary",
    variant = "contained",
    ...remainingPropsFromButton
}: CustomButtonProps) {
    return (
        <Button color={color} variant={variant} {...remainingPropsFromButton}>
            {loading ? (
                <Stack direction="row" alignItems="center" justifyContent="center">
                    {children} <CircularProgress color="inherit" size={14} sx={{ marginLeft: 1 }} />
                </Stack>
            ) : (
                <>{children}</>
            )}
        </Button>
    );
}
