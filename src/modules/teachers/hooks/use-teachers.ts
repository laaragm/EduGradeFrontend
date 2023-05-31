import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { IServiceResponse, QueryKeys } from "@/modules/shared/models";
import { ITeachers } from "../models";
import { GetAllTeachers } from "../services";

export function useTeachers() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Teachers], () => GetAllTeachers(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<ITeachers>, unknown>;

    return { data, isLoading, isFetching, error };
}
