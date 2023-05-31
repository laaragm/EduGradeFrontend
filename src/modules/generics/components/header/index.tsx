import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import { Wrapper } from "./styles";

export function Header() {
    return (
        <Wrapper>
            <Stack direction="row" alignItems="center" m={2} spacing={1}>
                <SchoolOutlinedIcon />
                <Typography variant="h5">EduGrade</Typography>
            </Stack>
        </Wrapper>
    );
}
