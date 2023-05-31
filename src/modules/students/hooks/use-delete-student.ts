import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { DeleteStudent } from "../services";

export function useDeleteStudent() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteStudent(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Students] }),
    });

    return { mutation };
}
