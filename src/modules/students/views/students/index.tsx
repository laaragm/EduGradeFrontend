import { useState } from "react";
import Stack from "@mui/material/Stack";

import { handleResponse } from "@/modules/shared/utils";
import { useDeleteStudent, useStudentsDataTable } from "@/modules/students/hooks";
import { CustomButton, CustomDialog, CustomTable } from "@/modules/shared/components";

export function StudentsView() {
    const tableHead = ["Identificador", "Nome", "Email", "Matrícula"];
    const { data } = useStudentsDataTable();
    const { mutation: exclude } = useDeleteStudent();
    const [confirmationDialog, setConfirmationDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);

    const handleEdit = (id: number) => {
        console.log("edit: ", id);
        setCurrentItemId(id);
    };

    const handleDeleteRequest = (id: number) => {
        console.log("delete: ", id);
        setConfirmationDialog(true);
        setCurrentItemId(id);
    };

    const handleDelete = async () => {
        if (currentItemId) {
            setIsLoading(true);
            const response = await exclude.mutateAsync(currentItemId);
            setIsLoading(false);
            handleResponse(response);
        }
    };

    const handleCancel = () => {
        setConfirmationDialog(false);
        setCurrentItemId(null);
    };

    return (
        <>
            {!!data && (
                <CustomTable header={tableHead} body={data} onEdit={handleEdit} onDelete={handleDeleteRequest} />
            )}
            <CustomDialog
                title="Exclusão de estudante"
                text="Você realmente deseja excluir este estudante?"
                isOpen={confirmationDialog}
                onClose={handleCancel}
                actions={
                    <Stack direction="row" width="100%" alignItems="center" justifyContent="flex-end" spacing={1} m={2}>
                        <CustomButton size="small" onClick={handleCancel}>
                            Cancelar
                        </CustomButton>
                        <CustomButton size="small" color="secondary" onClick={handleDelete} loading={isLoading}>
                            Excluir
                        </CustomButton>
                    </Stack>
                }
            />
        </>
    );
}
