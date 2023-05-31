import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IStudent } from "@/modules/students/models";

export async function UpdateStudent(student: IStudent): Promise<IServiceResponse<string>> {
    const route = "/students";
    const body = JSON.stringify(student);
    const defaultErrorMessage = "Could not update student. Please try again later.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
