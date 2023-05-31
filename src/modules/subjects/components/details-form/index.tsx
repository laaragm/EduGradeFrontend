import { useState } from "react";

import { ISubject } from "@/modules/subjects/models";
import { handleResponse } from "@/modules/shared/utils";
import { GenericForm } from "@/modules/shared/components";
import { useUpdateSubject, useCreateSubject } from "@/modules/subjects/hooks";
import { FieldType, IFormField, ISimplifiedTeacher } from "@/modules/shared/models";

interface DetailsFormProps {
    item?: ISubject;
    teachers: ISimplifiedTeacher[];
    onCancel: () => void;
}

export function DetailsForm({ item, teachers, onCancel }: DetailsFormProps) {
    const { mutation: create } = useCreateSubject();
    const { mutation: update } = useUpdateSubject();
    const [isLoading, setIsLoading] = useState(false);

    const fields: IFormField[] = [
        { name: "name", label: "Nome", type: FieldType.Text, defaultValue: item?.name },
        {
            name: "teacherId",
            label: "Professor",
            type: FieldType.Select,
            defaultValue: item?.teacher?.id,
            options: teachers,
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
