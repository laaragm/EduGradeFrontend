import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IGrade } from "@/modules/grades/models";

export async function CreateGrade(grade: IGrade): Promise<IServiceResponse<string>> {
    const route = "/grades";
    const body = JSON.stringify(grade);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
