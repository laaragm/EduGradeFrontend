import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { ISubject } from "../models";
import { UpdateSubject } from "../services";

export function useUpdateSubject() {
    const mutation = useMutation({
        mutationFn: async (subject: ISubject) => UpdateSubject(subject),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Subjects] }),
    });

    return { mutation };
}
