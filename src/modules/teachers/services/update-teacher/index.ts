import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ITeacher } from "@/modules/teachers/models";

export async function UpdateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = "/teachers";
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Could not update teacher. Please try again later.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
