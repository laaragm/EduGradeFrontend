import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { IServiceResponse, QueryKeys } from "@/modules/shared/models";
import { IDataTableStudent, IStudents } from "../models";
import { GetAllStudents } from "../services";

const transformData = (data: IServiceResponse<IStudents>) => {
    const items: IDataTableStudent[] = data.result?.data
        ? data.result.data.map((item) => ({
              id: item.id,
              name: item.name,
              registrationNumber: item.registrationNumber,
              email: item.email,
          }))
        : [];

    return items;
};

export function useStudents() {
    const { data, isLoading, isFetching, error, refetch } = useQuery([QueryKeys.Students], () => GetAllStudents(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IStudents>, unknown>;

    return { data, isLoading, isFetching, error, refetch };
}

export function useStudentsDataTable() {
    const { data, isLoading, isFetching, error, refetch } = useQuery([QueryKeys.Students], () => GetAllStudents(), {
        staleTime: 1000 * 60,
        select: transformData,
    }) as UseQueryResult<IDataTableStudent[], unknown>;

    return { data, isLoading, isFetching, error, refetch };
}
