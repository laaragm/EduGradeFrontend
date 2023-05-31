import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { DeleteSubject } from "../services";

export function useDeleteSubject() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteSubject(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Subjects] }),
    });

    return { mutation };
}
