import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ISubject } from "@/modules/subjects/models";

export async function UpdateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = "/subjects";
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Could not update subject. Please try again later.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
