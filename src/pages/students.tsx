import Head from "next/head";
import { useRouter } from "next/router";

import { StudentsView } from "@/modules/students/views";
import { LoadingScreen } from "@/modules/shared/components";

export default function Students() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>EduGrade</title>
                <meta name="description" content="Gerenciamento de estudantes" />
            </Head>
            {router.isReady ? <StudentsView /> : <LoadingScreen fullPageCentralized />}
        </>
    );
}
