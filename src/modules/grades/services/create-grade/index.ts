import { Create } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IGrade } from "@/modules/grades/models";

export async function CreateGrade(grade: IGrade): Promise<IServiceResponse<string>> {
    const route = "/grades";
    const body = JSON.stringify(grade);
    const defaultErrorMessage = "Could not create grade. Please try again later.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}
