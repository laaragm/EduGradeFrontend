import { useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";

import { handleResponse } from "../utils";
import { IServiceResponse } from "../models";

export function useDataTable(deleteMutation: UseMutationResult<IServiceResponse<string>, unknown, number, unknown>) {
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
            const response = await deleteMutation.mutateAsync(currentItemId);
            setIsLoading(false);
            handleResponse(response);
            handleCancel();
        }
    };

    const handleCancel = () => {
        setConfirmationDialog(false);
        setCurrentItemId(null);
    };

    return {
        confirmationDialog,
        isLoading,
        currentItemId,
        handleDelete,
        handleEdit,
        handleDeleteRequest,
        handleCancel,
    };
}
