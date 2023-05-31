import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { IGrade } from "../models";
import { CreateGrade } from "../services";

export function useCreateGrade() {
    const mutation = useMutation({
        mutationFn: async (grade: IGrade) => CreateGrade(grade),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Grades] }),
    });

    return { mutation };
}
