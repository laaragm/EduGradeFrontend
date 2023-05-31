import { Delete } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";

export async function DeleteSubject(id: number): Promise<IServiceResponse<string>> {
    const route = `/subjects/${id}`;
    const defaultErrorMessage = "Could not delete subject. Please try again later.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}
