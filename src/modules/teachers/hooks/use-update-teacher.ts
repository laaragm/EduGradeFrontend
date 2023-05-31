import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { ITeacher } from "../models";
import { UpdateTeacher } from "../services";

export function useUpdateTeacher() {
    const mutation = useMutation({
        mutationFn: async (teacher: ITeacher) => UpdateTeacher(teacher),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Teachers] }),
    });

    return { mutation };
}
