import MenuItem from "@mui/material/MenuItem";

import { StyledSelect } from "./styles";
import { MenuProps } from "@mui/material/Menu";

interface CustomSelectProps {
    name: string;
    value: string | number | boolean | undefined;
    options: Array<{ id: number; name: string }>;
    onChange: (value: any) => void;
}

const MenuStyles: Partial<MenuProps> = {
    PaperProps: {
        sx: {
            fontSize: "1rem",
        },
    },
};

export function CustomSelect({ name, value, options, onChange }: CustomSelectProps) {
    return (
        <StyledSelect
            id={name}
            value={!!value ? options?.find((x) => x.name === value)?.id : ""}
            onChange={onChange}
            sx={{ fontSize: "1rem" }}>
            {!!options &&
                options.map((option) => (
                    <MenuItem key={option.id} value={option.id} sx={{ fontSize: "1rem" }}>
                        {option.name}
                    </MenuItem>
                ))}
        </StyledSelect>
    );
}
