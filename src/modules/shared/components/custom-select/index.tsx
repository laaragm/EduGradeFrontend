import MenuItem from "@mui/material/MenuItem";

import { StyledSelect } from "./styles";

interface CustomSelectProps {
    name: string;
    value: string | number | boolean;
    options: Array<{ id: number; name: string }>;
    onChange: (value: any) => void;
}

export function CustomSelect({ name, value, options, onChange }: CustomSelectProps) {
    console.log("value: ", value);
    const handleChange = (e: any) => {
        const option = options.find((x) => x.id === e.target.value)?.name;
        console.log("value on change:", e.target.value);
        onChange(e.target.value);
    };

    return (
        <StyledSelect id={name} value={value} onChange={handleChange} sx={{ fontSize: "1rem" }}>
            {!!options &&
                options.map((option) => (
                    <MenuItem key={option.id} value={option.id} sx={{ fontSize: "1rem" }}>
                        {option.name}
                    </MenuItem>
                ))}
        </StyledSelect>
    );
}
