import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ITeacher } from "@/modules/teachers/models";

export async function CreateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = "/teachers";
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
