import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { IServiceResponse, QueryKeys } from "@/modules/shared/models";
import { GetAllGrades } from "../services";
import { IGrade } from "../models";

export function useGrades() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Grades], () => GetAllGrades(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IGrade[]>, unknown>;

    return { data, isLoading, isFetching, error };
}
