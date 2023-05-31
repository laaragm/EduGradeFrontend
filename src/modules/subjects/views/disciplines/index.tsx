import { useMemo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { useDataTable } from "@/modules/shared/hooks";
import { DetailsForm } from "@/modules/subjects/components";
import { IDataTableSubject, ISubject } from "@/modules/subjects/models";
import { useDeleteSubject, useSubjects } from "@/modules/subjects/hooks";
import { CustomButton, CustomDialog, CustomTable, Page } from "@/modules/shared/components";
import { TableWrapper, Wrapper } from "./styles";
import { useTeachers } from "@/modules/teachers/hooks";

const transformData = (data: ISubject[]) => {
    const items: IDataTableSubject[] =
        data instanceof Array
            ? data.map((item) => ({
                  id: item.id,
                  name: item.name,
                  teacherName: item.teacher?.name,
              }))
            : [];

    return items;
};

export function DisciplinesView() {
    const tableHead = ["Identificador", "Nome", "Professor", ""];
    const { data, isLoading: isLoadingData } = useSubjects();
    const { data: teachers } = useTeachers();
    const dataTableBody = useMemo(() => {
        if (!isLoadingData && !!data?.result?.data) {
            return transformData(data.result.data);
        }
    }, [isLoadingData, data]);
    const { mutation: exclude } = useDeleteSubject();
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
                <Typography variant="h4">Lista de Disciplinas</Typography>
                <CustomButton onClick={handleAddRequest}>Adicionar disciplina</CustomButton>
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
                            <Typography>Não existem disciplinas cadastradas</Typography>
                        )}
                    </TableWrapper>
                )}

                <CustomDialog
                    title="Exclusão de disciplina"
                    text="Você realmente deseja excluir esta disciplina?"
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
                    title="Cadastro de disciplina"
                    text="Preencha os campos abaixo e em seguida salve as alterações"
                    isOpen={addNewItem}
                    onClose={handleCancel}
                    actions={
                        <Stack width="100%">
                            <DetailsForm onCancel={handleCancel} teachers={teachers?.result?.data || []} />
                        </Stack>
                    }
                />

                <CustomDialog
                    title="Edição de disciplina"
                    text="Preencha os campos abaixo e em seguida salve as alterações"
                    isOpen={updateItem}
                    onClose={handleCancel}
                    actions={
                        <Stack width="100%">
                            <DetailsForm
                                teachers={teachers?.result?.data || []}
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
