import Stack from "@mui/material/Stack";

import { useDeleteStudent, useStudentsDataTable } from "@/modules/students/hooks";
import { CustomButton, CustomDialog, CustomTable } from "@/modules/shared/components";
import { useDataTable } from "@/modules/shared/hooks";

export function StudentsView() {
    const tableHead = ["Identificador", "Nome", "Email", "Matrícula"];
    const { data } = useStudentsDataTable();
    const { mutation: exclude } = useDeleteStudent();
    const {
        confirmationDialog,
        isLoading,
        currentItemId,
        handleDelete,
        handleEdit,
        handleDeleteRequest,
        handleCancel,
    } = useDataTable(exclude);

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
