import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ITeacher } from "@/modules/teachers/models";

export async function UpdateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = `/teachers/${teacher.id}`;
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
