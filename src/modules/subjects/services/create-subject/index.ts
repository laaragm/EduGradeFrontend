import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ISubject } from "@/modules/subjects/models";

export async function CreateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = "/subjects";
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Could not create subject. Please try again later.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
