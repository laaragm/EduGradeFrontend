import { Get } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IGrade } from "@/modules/grades/models";

export async function GetAllGrades(): Promise<IServiceResponse<IGrade[]>> {
    const route = "/grades";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<IGrade[]>({ route, defaultErrorMessage });

    return result;
}
