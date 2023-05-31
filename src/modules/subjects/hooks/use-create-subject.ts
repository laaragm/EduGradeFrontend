import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { ISubject } from "../models";
import { CreateSubject } from "../services";

export function useCreateSubject() {
    const mutation = useMutation({
        mutationFn: async (subject: ISubject) => CreateSubject(subject),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Subjects] }),
    });

    return { mutation };
}
