import { AxiosRequestConfig } from "axios";

import { HttpStatusCodesEnum, IServiceResponse } from "@/modules/shared/models";
import { api } from "../api";

type RequestParams = {
    route: string;
    defaultErrorMessage: string;
    body?: RequestBody;
    config?: AxiosRequestConfig;
};

type BaseRequestParams = RequestParams & { httpMethod: HttpMethod };

type HttpMethod = "get" | "post" | "patch" | "delete";

type RequestBody = string | FormData;

export const Get = async <T>(requestParams: RequestParams): Promise<IServiceResponse<T>> => {
    const { route, defaultErrorMessage, config } = requestParams;
    const httpMethod: HttpMethod = "get";
    const result = await BaseRequest<T>({ route, defaultErrorMessage, httpMethod, config });
    return result;
};

export const Create = async <T>(requestParams: RequestParams): Promise<IServiceResponse<T>> => {
    const { route, defaultErrorMessage, body, config } = requestParams;
    const httpMethod: HttpMethod = "post";
    const result = await BaseRequest<T>({ route, defaultErrorMessage, httpMethod, body, config });
    return result;
};

export const Update = async <T>(requestParams: RequestParams): Promise<IServiceResponse<T>> => {
    const { route, defaultErrorMessage, body, config } = requestParams;
    const httpMethod: HttpMethod = "patch";
    const result = await BaseRequest<T>({ route, defaultErrorMessage, httpMethod, body, config });
    return result;
};

export const Delete = async <T>(requestParams: RequestParams): Promise<IServiceResponse<T>> => {
    const { route, defaultErrorMessage, config } = requestParams;
    const httpMethod: HttpMethod = "delete";
    const result = await BaseRequest<T>({ route, defaultErrorMessage, httpMethod, config });
    return result;
};

const BaseRequest = async <T>(requestParams: BaseRequestParams): Promise<IServiceResponse<T>> => {
    const { route, defaultErrorMessage, httpMethod, body, config } = requestParams;
    const resultFormatted: IServiceResponse<T> = {
        result: null,
        error: false,
        errorMessage: "",
    };

    try {
        const response = await PerformRequest({ httpMethod, defaultErrorMessage, route, body, config });
        if (response?.status === HttpStatusCodesEnum.success) {
            resultFormatted.result = response.data;
        } else {
            resultFormatted.error = true;
            resultFormatted.errorMessage = defaultErrorMessage;
        }
    } catch (error) {
        resultFormatted.error = true;
        resultFormatted.errorMessage = error instanceof Error ? error.message : defaultErrorMessage;
    }

    return resultFormatted;
};

const PerformRequest = async (requestParams: BaseRequestParams) => {
    const { route, httpMethod, body, config } = requestParams;
    switch (httpMethod) {
        case "get": {
            return await api.get(route, config);
        }
        case "post": {
            return await api.post(route, body, config);
        }
        case "patch": {
            return await api.patch(route, body, config);
        }
        case "delete": {
            return await api.delete(route, config);
        }
        default: {
            return;
        }
    }
};
