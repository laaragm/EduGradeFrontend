import { IServiceResponse } from "@/modules/shared/models";
import { showErrorMessage, showSuccessMessage } from "./snackbars";

export function isStringNullOrEmpty(value: string | null | undefined) {
    return value == null || value === "" || value === undefined;
}

export function handleResponse<T>(response: IServiceResponse<T>, successMessage?: string) {
    if (response.error) {
        showErrorMessage(response.errorMessage);
    } else {
        const defaultMessage = "Operação realizada com sucesso";
        showSuccessMessage(successMessage ? successMessage : defaultMessage);
    }
}
