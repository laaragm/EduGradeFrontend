import { Get } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { ISubject } from "@/modules/subjects/models";

export async function GetAllSubjects(): Promise<IServiceResponse<ISubject[]>> {
    const route = "/subjects";
    const defaultErrorMessage = "Could not retrieve subjects. Please try again later.";
    const result = await Get<ISubject[]>({ route, defaultErrorMessage });

    return result;
}
