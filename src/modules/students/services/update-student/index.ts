import { Update } from "@/modules/shared/services";
import { IServiceResponse } from "@/modules/shared/models";
import { IStudent } from "@/modules/students/models";

export async function UpdateStudent(student: IStudent): Promise<IServiceResponse<string>> {
    const route = `/students/${student.id}`;
    const body = JSON.stringify(student);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
