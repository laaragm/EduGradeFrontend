import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { ITeacher } from "../models";
import { CreateTeacher } from "../services";

export function useCreateTeacher() {
    const mutation = useMutation({
        mutationFn: async (teacher: ITeacher) => CreateTeacher(teacher),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Teachers] }),
    });

    return { mutation };
}
