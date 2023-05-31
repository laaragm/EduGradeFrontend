import { useMemo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { useDataTable } from "@/modules/shared/hooks";
import { useStudents } from "@/modules/students/hooks";
import { useSubjects } from "@/modules/subjects/hooks";
import { DetailsForm } from "@/modules/grades/components";
import { IDataTableGrade, IGrade } from "@/modules/grades/models";
import { useDeleteGrade, useGrades } from "@/modules/grades/hooks";
import { CustomButton, CustomDialog, CustomTable, Page } from "@/modules/shared/components";
import { TableWrapper, Wrapper } from "./styles";

const transformData = (data: IGrade[]) => {
    const items: IDataTableGrade[] =
        data instanceof Array
            ? data.map((item) => ({
                  id: item.id,
                  value: item.value,
                  studentName: item.student?.name,
                  subjectName: item.subject?.name,
              }))
            : [];

    return items;
};

export function GradesView() {
    const tableHead = ["Identificador", "Nota", "Estudante", "Disciplina", ""];
    const { data, isLoading: isLoadingData } = useGrades();
    const { data: students } = useStudents();
    const { data: subjects } = useSubjects();
    const dataTableBody = useMemo(() => {
        if (!isLoadingData && !!data?.result?.data) {
            return transformData(data.result.data);
        }
    }, [isLoadingData, data]);
    const { mutation: exclude } = useDeleteGrade();
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
                <Typography variant="h4">Notas dos Estudantes</Typography>
                <CustomButton onClick={handleAddRequest}>Adicionar nota</CustomButton>
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
                            <Typography>Não existem notas cadastradas</Typography>
                        )}
                    </TableWrapper>
                )}

                <CustomDialog
                    title="Exclusão de nota"
                    text="Você realmente deseja excluir esta nota?"
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
                    title="Cadastro de nota"
                    text="Preencha os campos abaixo e em seguida salve as alterações"
                    isOpen={addNewItem}
                    onClose={handleCancel}
                    actions={
                        <Stack width="100%">
                            <DetailsForm
                                onCancel={handleCancel}
                                subjects={subjects?.result?.data || []}
                                students={students?.result?.data || []}
                            />
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
                                subjects={subjects?.result?.data || []}
                                students={students?.result?.data || []}
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
