import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { IServiceResponse, QueryKeys } from "@/modules/shared/models";
import { IStudents } from "../models";
import { GetAllStudents } from "../services";

export function useStudents() {
    const { data, isLoading, isFetching, error, refetch } = useQuery([QueryKeys.Students], () => GetAllStudents(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IStudents>, unknown>;

    return { data, isLoading, isFetching, error, refetch };
}
