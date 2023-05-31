import { useStudentsDataTable } from "@/modules/students/hooks";
import { CustomTable } from "@/modules/shared/components";

export function StudentsView() {
    const { data } = useStudentsDataTable();
    const tableHead = ["Id", "Name", "Email", "Registration Number"];

    return <>{!!data && <CustomTable header={tableHead} body={data} />}</>;
}
