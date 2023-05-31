import { useMutation } from "@tanstack/react-query";

import { QueryKeys } from "@/modules/shared/models";
import { queryClient } from "@/modules/shared/services";
import { IGrade } from "../models";
import { UpdateGrade } from "../services";

export function useUpdateGrade() {
    const mutation = useMutation({
        mutationFn: async (grade: IGrade) => UpdateGrade(grade),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Grades] }),
    });

    return { mutation };
}
