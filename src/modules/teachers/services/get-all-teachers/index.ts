import { Get } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ITeacher } from "@/modules/teachers/models";

export async function GetAllTeachers(): Promise<IServiceResponse<ITeacher[]>> {
    const route = "/teachers";
    const defaultErrorMessage = "Could not retrieve teachers. Please try again later.";
    const result = await Get<ITeacher[]>({ route, defaultErrorMessage });

    return result;
}
