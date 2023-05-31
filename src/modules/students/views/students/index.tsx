import { useMemo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { useDataTable } from "@/modules/shared/hooks";
import { DetailsForm } from "@/modules/students/components";
import { IDataTableStudent, IStudent } from "@/modules/students/models";
import { useDeleteStudent, useStudents } from "@/modules/students/hooks";
import { CustomButton, CustomDialog, CustomTable, Page } from "@/modules/shared/components";
import { TableWrapper, Wrapper } from "./styles";

const transformData = (data: IStudent[]) => {
    const items: IDataTableStudent[] =
        data instanceof Array
            ? data.map((item) => ({
                  id: item.id,
                  name: item.name,
                  registrationNumber: item.registrationNumber,
                  email: item.email,
              }))
            : [];

    return items;
};

export function StudentsView() {
    const tableHead = ["Identificador", "Nome", "Matrícula", "Email", ""];
    const { data, isLoading: isLoadingData } = useStudents();
    const dataTableBody = useMemo(() => {
        if (!isLoadingData && !!data?.result?.data) {
            return transformData(data.result.data);
        }
    }, [isLoadingData, data]);
    const { mutation: exclude } = useDeleteStudent();
    const {
        confirmationDialog,
        isLoading,
        handleDelete,
        handleEditRequest,
        handleDeleteRequest,
        handleAddRequest,
        handleCancel,
        addNewItem,
        updateItem,
        currentItemId,
    } = useDataTable(exclude);

    return (
        <Page title="EduGrade">
            <Stack justifyContent="space-between" alignItems="center" direction="row" width="70%">
                <Typography variant="h4">Lista de Estudantes</Typography>
                <CustomButton onClick={handleAddRequest}>Adicionar estudante</CustomButton>
            </Stack>
            <Wrapper mt={5}>
                {isLoadingData ? (
                    <LinearProgress />
                ) : (
                    <TableWrapper>
                        {!!dataTableBody ? (
                            <CustomTable
                                header={tableHead}
                                body={dataTableBody}
                                onEdit={handleEditRequest}
                                onDelete={handleDeleteRequest}
                            />
                        ) : (
                            <Typography>Não existem estudantes cadastrados</Typography>
                        )}
                    </TableWrapper>
                )}

                <CustomDialog
                    title="Exclusão de estudante"
                    text="Você realmente deseja excluir este estudante?"
                    isOpen={confirmationDialog}
                    onClose={handleCancel}
                    actions={
                        <Stack
                            direction="row"
                            width="100%"
                            alignItems="center"
                            justifyContent="flex-end"
                            spacing={1}
                            m={2}>
                            <CustomButton size="small" onClick={handleCancel}>
                                Cancelar
                            </CustomButton>
                            <CustomButton size="small" color="secondary" onClick={handleDelete} loading={isLoading}>
                                Excluir
                            </CustomButton>
                        </Stack>
                    }
                />

                <CustomDialog
                    title="Cadastro de estudante"
                    text="Preencha os campos abaixo e em seguida salve as alterações"
                    isOpen={addNewItem}
                    onClose={handleCancel}
                    actions={
                        <Stack width="100%">
                            <DetailsForm onCancel={handleCancel} />
                        </Stack>
                    }
                />

                <CustomDialog
                    title="Edição de estudante"
                    text="Preencha os campos abaixo e em seguida salve as alterações"
                    isOpen={updateItem}
                    onClose={handleCancel}
                    actions={
                        <Stack width="100%">
                            <DetailsForm
                                onCancel={handleCancel}
                                item={
                                    !!data?.result?.data
                                        ? data.result.data.find((x) => x.id === currentItemId)
                                        : undefined
                                }
                            />
                        </Stack>
                    }
                />
            </Wrapper>
        </Page>
    );
}
