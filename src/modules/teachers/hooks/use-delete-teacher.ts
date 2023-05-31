import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { DeleteTeacher } from "../services";

export function useDeleteTeacher() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteTeacher(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Teachers] }),
    });

    return { mutation };
}
