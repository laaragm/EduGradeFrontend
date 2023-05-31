import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { IServiceResponse, QueryKeys } from "@/modules/shared/models";
import { GetAllGrades } from "../services";
import { IGrades } from "../models";

export function useGrades() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Grades], () => GetAllGrades(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IGrades>, unknown>;

    return { data, isLoading, isFetching, error };
}
