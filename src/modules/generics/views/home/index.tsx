import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { PATHS } from "@/routes";
import { Page } from "@/modules/shared/components";
import { Wrapper } from "./styles";

export function HomeView() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push(PATHS.students.route);
    };

    return (
        <Page title="EduGrade">
            <Wrapper>
                <Card sx={{ borderRadius: "20px", width: "30%", backgroundColor: "#fff" }}>
                    <Stack direction="column" alignItems="center" justifyContent="center" spacing={7} p={10}>
                        <Typography variant="h2">EduGrade</Typography>
                        <Typography variant="body2">
                            EduGrade é uma aplicação projetada para gerenciar e acompanhar a performance acadêmica no
                            âmbito escolar. <br /> <br /> Esta solução fornece um sistema centralizado para que os
                            professores gerenciem as disciplinas e atribuam notas, enquanto os alunos podem acessá-las e
                            acompanhar seu desempenho acadêmico.
                        </Typography>
                        <Stack mt={5} direction="column" width="100%">
                            <Stack spacing={2}>
                                <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleRedirect}>
                                    Começar
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Wrapper>
        </Page>
    );
}
