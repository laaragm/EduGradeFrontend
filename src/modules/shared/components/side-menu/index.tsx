import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { PATHS } from "@/routes";
import { SideMenuContainer, CustomLink } from "./styles";

export function SideMenu() {
    const router = useRouter();

    const handleRedirect = (path: string) => {
        router.push(path);
    };

    return (
        <SideMenuContainer>
            <Typography sx={{ cursor: "pointer" }} variant="h3" onClick={() => handleRedirect(PATHS.home.route)}>
                EduGrade
            </Typography>
            <Stack spacing={5} alignItems="center" justifyContent="center" height="100%">
                <CustomLink onClick={() => handleRedirect(PATHS.students.route)}>Estudantes</CustomLink>
                <CustomLink onClick={() => handleRedirect(PATHS.teachers.route)}>Professores</CustomLink>
                <CustomLink onClick={() => handleRedirect(PATHS.subjects.route)}>Disciplinas</CustomLink>
                <CustomLink onClick={() => handleRedirect(PATHS.grades.route)}>Notas</CustomLink>
            </Stack>
        </SideMenuContainer>
    );
}
