import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ISubject } from "@/modules/subjects/models";

export async function CreateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = "/subjects";
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
