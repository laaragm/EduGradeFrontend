import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IStudent } from "@/modules/students/models";

export async function CreateStudent(student: IStudent): Promise<IServiceResponse<string>> {
    const route = "/students";
    const body = JSON.stringify(student);
    const defaultErrorMessage = "Could not create student. Please try again later.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
