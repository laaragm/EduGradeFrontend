import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Wrapper } from "./styles";

interface CustomTextFieldProps {
    label?: string;
    value: string | number | boolean;
    defaultValue?: string | number | boolean;
    name: string;
    variant?: "filled" | "standard" | "outlined";
    multiline?: boolean;
    disabled?: boolean;
    onChange: (value: string) => void;
}

export function CustomTextField({
    value,
    label,
    name,
    defaultValue,
    variant = "outlined",
    multiline = false,
    disabled = false,
    onChange,
}: CustomTextFieldProps) {
    const theme = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <Wrapper>
            {!!label && <Typography variant="body1">{label}</Typography>}
            <TextField
                id={name}
                value={value}
                defaultValue={defaultValue}
                onChange={handleChange}
                variant={variant}
                multiline={multiline}
                fullWidth={true}
                disabled={disabled}
                inputProps={{
                    sx: {
                        backgroundColor: theme.palette.grey[100],
                        boxSizing: "border-box",
                        height: "1.5rem",
                        fontSize: "1rem",
                    },
                }}
                sx={{
                    "& fieldset": { border: `1px solid ${theme.palette.secondary.main}` },
                }}
            />
        </Wrapper>
    );
}
