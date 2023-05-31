import { useState } from "react";

import { IGrade } from "@/modules/grades/models";
import { handleResponse } from "@/modules/shared/utils";
import { GenericForm } from "@/modules/shared/components";
import { useUpdateGrade, useCreateGrade } from "@/modules/grades/hooks";
import { FieldType, IFormField, ISimplifiedStudent, ISimplifiedSubject } from "@/modules/shared/models";

interface DetailsFormProps {
    item?: IGrade;
    subjects: ISimplifiedSubject[];
    students: ISimplifiedStudent[];
    onCancel: () => void;
}

export function DetailsForm({ item, subjects, students, onCancel }: DetailsFormProps) {
    const { mutation: create } = useCreateGrade();
    const { mutation: update } = useUpdateGrade();
    const [isLoading, setIsLoading] = useState(false);

    const fields: IFormField[] = [
        { name: "value", label: "Nota", type: FieldType.Text, defaultValue: item?.value },
        {
            name: "studentId",
            label: "Estudante",
            type: FieldType.Select,
            defaultValue: item?.student?.id,
            options: students,
        },
        {
            name: "subjectId",
            label: "Disciplina",
            type: FieldType.Select,
            defaultValue: item?.subject?.id,
            options: subjects,
        },
    ];

    const onSubmit = async (data: any, reset: () => void) => {
        setIsLoading(true);
        let response;
        const isUpdateOperation = !!item;
        if (isUpdateOperation) {
            const itemToUpdate = { ...data, id: item.id };
            response = await update.mutateAsync(itemToUpdate);
        } else {
            const itemToRegister = { ...data, id: 0 };
            response = await create.mutateAsync(itemToRegister);
        }
        if (!response.error) {
            onCancel();
            reset();
        }
        setIsLoading(false);
        handleResponse(response);
    };

    return <GenericForm fields={fields} onSubmit={onSubmit} onCancel={onCancel} isLoading={isLoading} />;
}
