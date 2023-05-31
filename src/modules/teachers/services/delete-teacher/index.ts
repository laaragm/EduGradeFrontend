import { Delete } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";

export async function DeleteTeacher(id: number): Promise<IServiceResponse<string>> {
    const route = `/teachers/${id}`;
    const defaultErrorMessage = "Could not delete teacher. Please try again later.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}
