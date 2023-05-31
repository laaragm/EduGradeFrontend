import { Delete } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";

export async function DeleteTeacher(id: number): Promise<IServiceResponse<string>> {
    const route = `/teachers/${id}`;
    const defaultErrorMessage = "Não foi possível realizar a exclusão. Tente novamente mais tarde.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}
