import { Delete } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";

export async function DeleteGrade(id: number): Promise<IServiceResponse<string>> {
    const route = `/grades/${id}`;
    const defaultErrorMessage = "Could not delete grade. Please try again later.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}
