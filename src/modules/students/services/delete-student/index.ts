import { Delete } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";

export async function DeleteStudent(id: number): Promise<IServiceResponse<string>> {
    const route = `/students/${id}`;
    const defaultErrorMessage = "Could not delete student. Please try again later.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}
