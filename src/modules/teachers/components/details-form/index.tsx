import { useState } from "react";

import { ITeacher } from "@/modules/teachers/models";
import { handleResponse } from "@/modules/shared/utils";
import { FieldType, IFormField } from "@/modules/shared/models";
import { GenericForm } from "@/modules/shared/components";
import { useCreateTeacher, useUpdateTeacher } from "@/modules/teachers/hooks";

interface DetailsFormProps {
    item?: ITeacher;
    onCancel: () => void;
}

export function DetailsForm({ item, onCancel }: DetailsFormProps) {
    const { mutation: create } = useCreateTeacher();
    const { mutation: update } = useUpdateTeacher();
    const [isLoading, setIsLoading] = useState(false);

    const fields: IFormField[] = [
        { name: "name", label: "Nome", type: FieldType.Text, defaultValue: item?.name },
        { name: "cpf", label: "CPF", type: FieldType.Text, defaultValue: item?.cpf },
        { name: "expertiseAreas", label: "Áreas de atuação", type: FieldType.Text, defaultValue: item?.expertiseAreas },
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
