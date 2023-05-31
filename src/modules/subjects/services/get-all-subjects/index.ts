import { Get } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ISubject } from "@/modules/subjects/models";

export async function GetAllSubjects(): Promise<IServiceResponse<ISubject[]>> {
    const route = "/subjects";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<ISubject[]>({ route, defaultErrorMessage });

    return result;
}
