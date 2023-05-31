import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { IServiceResponse, QueryKeys } from "@/modules/shared/models";
import { ISubjects } from "../models";
import { GetAllSubjects } from "../services";

export function useSubjects() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Subjects], () => GetAllSubjects(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<ISubjects>, unknown>;

    return { data, isLoading, isFetching, error };
}
