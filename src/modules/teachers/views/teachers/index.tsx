import { CustomTable } from "@/modules/shared/components";
import { useTeachers } from "@/modules/teachers/hooks";

export function TeachersView() {
    const { data } = useTeachers();

    return (
        <>
            {!data?.error && (
                <CustomTable
                    header={["Name", "CPF", "Expertise Areas", "Subjects"]}
                    body={data?.result?.forEach((x) => x.subjects.join(", ")) || []}
                />
            )}
        </>
    );
}
