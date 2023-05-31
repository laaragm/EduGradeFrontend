import { useState } from "react";

import { IStudent } from "@/modules/students/models";
import { handleResponse } from "@/modules/shared/utils";
import { GenericForm } from "@/modules/shared/components";
import { useCreateStudent, useUpdateStudent } from "@/modules/students/hooks";
import { FieldType, IFormField } from "@/modules/shared/models";

interface DetailsFormProps {
    item?: IStudent;
    onCancel: () => void;
}

export function DetailsForm({ item, onCancel }: DetailsFormProps) {
    const { mutation: create } = useCreateStudent();
    const { mutation: update } = useUpdateStudent();
    const [isLoading, setIsLoading] = useState(false);

    const fields: IFormField[] = [
        { name: "name", label: "Nome", type: FieldType.Text, defaultValue: item?.name },
        { name: "email", label: "Email", type: FieldType.Text, defaultValue: item?.email },
        { name: "phoneNumber", label: "Telefone", type: FieldType.Text, defaultValue: item?.phoneNumber },
        {
            name: "registrationNumber",
            label: "Matrícula",
            type: FieldType.Text,
            defaultValue: item?.registrationNumber,
        },
        { name: "address", label: "Endereço", type: FieldType.Text, defaultValue: item?.address },
    ];

    const onSubmit = async (data: any, reset: () => void) => {
        setIsLoading(true);
        let response;
        const isUpdateOperation = !!item;
        if (isUpdateOperation) {
            const studentToUpdate = { ...data, id: item.id };
            response = await update.mutateAsync(studentToUpdate);
        } else {
            const studentToRegister = { ...data, id: 0 };
            response = await create.mutateAsync(studentToRegister);
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
