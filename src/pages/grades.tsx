import Head from "next/head";
import { useRouter } from "next/router";

import { GradesView } from "@/modules/grades/views";
import { LoadingScreen } from "@/modules/shared/components";

export default function Grades() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>EduGrade</title>
                <meta name="description" content="Gerenciamento de notas" />
            </Head>
            {router.isReady ? <GradesView /> : <LoadingScreen fullPageCentralized />}
        </>
    );
}
