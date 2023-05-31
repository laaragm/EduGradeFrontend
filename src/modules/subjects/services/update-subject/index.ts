import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ISubject } from "@/modules/subjects/models";

export async function UpdateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = `/subjects/${subject.id}`;
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
