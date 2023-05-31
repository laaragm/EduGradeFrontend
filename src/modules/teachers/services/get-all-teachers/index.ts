import { Get } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ITeacher } from "@/modules/teachers/models";

export async function GetAllTeachers(): Promise<IServiceResponse<ITeacher[]>> {
    const route = "/teachers";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<ITeacher[]>({ route, defaultErrorMessage });

    return result;
}
