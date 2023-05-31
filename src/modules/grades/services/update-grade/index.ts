import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IGrade } from "@/modules/grades/models";

export async function UpdateGrade(grade: IGrade): Promise<IServiceResponse<string>> {
    const route = `/grades/${grade.id}`;
    const body = JSON.stringify(grade);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
