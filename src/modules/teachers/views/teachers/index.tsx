import { useMemo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { useDataTable } from "@/modules/shared/hooks";
import { IDataTableTeacher, ITeacher } from "@/modules/teachers/models";
import { useDeleteTeacher, useTeachers } from "@/modules/teachers/hooks";
import { DetailsForm } from "@/modules/teachers/components";
import { CustomButton, CustomDialog, CustomTable, Page } from "@/modules/shared/components";
import { TableWrapper, Wrapper } from "./styles";

const transformData = (data: ITeacher[]) => {
    const items: IDataTableTeacher[] =
        data instanceof Array
            ? data.map((item) => ({
                  id: item.id,
                  name: item.name,
                  cpf: item.cpf,
                  expertiseAreas: item.expertiseAreas,
              }))
            : [];

    return items;
};

export function TeachersView() {
    const tableHead = ["Identificador", "Nome", "CPF", "Áreas de atuação", ""];
    const { data, isLoading: isLoadingData } = useTeachers();
    const dataTableBody = useMemo(() => {
        if (!isLoadingData && !!data?.result?.data) {
            return transformData(data.result.data);
        }
    }, [isLoadingData, data]);
    const { mutation: exclude } = useDeleteTeacher();
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
                <Typography variant="h4">Lista de Professores</Typography>
                <CustomButton onClick={handleAddRequest}>Adicionar professor</CustomButton>
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
                            <Typography>Não existem professores cadastrados</Typography>
                        )}
                    </TableWrapper>
                )}

                <CustomDialog
                    title="Exclusão de professor"
                    text="Você realmente deseja excluir este professor?"
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
                    title="Cadastro de professor"
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
                    title="Edição de professor"
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
