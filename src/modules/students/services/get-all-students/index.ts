import { Get } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IStudents } from "@/modules/students/models";

export async function GetAllStudents(): Promise<IServiceResponse<IStudents>> {
    const route = "/students";
    const defaultErrorMessage = "Could not retrieve students. Please try again later.";
    const result = await Get<IStudents>({ route, defaultErrorMessage });

    return result;
}
