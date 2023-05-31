import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Page } from "@/modules/shared/components";
import { Wrapper } from "./styles";
import { useRouter } from "next/router";
import { PATHS } from "@/routes";

export function HomeView() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push(PATHS.students.route);
    };

    return (
        <Page title="EduGrade">
            <Wrapper>
                <Card sx={{ borderRadius: "20px", width: "30%" }}>
                    <Stack direction="column" alignItems="center" justifyContent="center" spacing={7} p={10}>
                        <Typography variant="h2">EduGrade</Typography>
                        <Typography variant="body2">
                            EduGrade is a user-friendly application designed to manage and track academic performance in
                            a school environment. <br /> <br /> This solution provides a centralized system for teachers
                            to manage subjects and assign grades, while students can seamlessly access and view their
                            academic grades.
                        </Typography>
                        <Stack mt={5} direction="column" width="100%">
                            <Stack spacing={2}>
                                <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleRedirect}>
                                    Já tenho uma conta
                                </Button>
                                <Button disabled variant="contained" endIcon={<ArrowForwardIcon />}>
                                    Quero me cadastrar
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Wrapper>
        </Page>
    );
}
