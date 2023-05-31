import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { IStudent } from "../models";
import { UpdateStudent } from "../services";

export function useUpdateStudent() {
    const mutation = useMutation({
        mutationFn: async (student: IStudent) => UpdateStudent(student),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Students] }),
    });

    return { mutation };
}
