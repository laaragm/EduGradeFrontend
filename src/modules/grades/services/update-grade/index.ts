import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IGrade } from "@/modules/grades/models";

export async function UpdateGrade(grade: IGrade): Promise<IServiceResponse<string>> {
    const route = "/grades";
    const body = JSON.stringify(grade);
    const defaultErrorMessage = "Could not update grade. Please try again later.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
