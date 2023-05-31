import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { IStudent } from "../models";
import { CreateStudent } from "../services";

export function useCreateStudent() {
    const mutation = useMutation({
        mutationFn: async (student: IStudent) => CreateStudent(student),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Students] }),
    });

    return { mutation };
}
