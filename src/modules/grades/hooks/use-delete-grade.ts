import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { DeleteGrade } from "../services";

export function useDeleteGrade() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteGrade(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Grades] }),
    });

    return { mutation };
}
