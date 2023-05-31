import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ITeacher } from "@/modules/teachers/models";

export async function CreateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = "/teachers";
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Could not create teacher. Please try again later.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
