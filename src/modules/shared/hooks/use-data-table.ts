import { useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";

import { handleResponse } from "../utils";
import { IServiceResponse } from "../models";

export function useDataTable(deleteMutation: UseMutationResult<IServiceResponse<string>, unknown, number, unknown>) {
    const [confirmationDialog, setConfirmationDialog] = useState(false);
    const [addNewItem, setAddNewItem] = useState(false);
    const [updateItem, setUpdateItem] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);

    const handleEditRequest = (id: number) => {
        setCurrentItemId(id);
        setUpdateItem(true);
    };

    const handleDeleteRequest = (id: number) => {
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
        setAddNewItem(false);
        setUpdateItem(false);
        setCurrentItemId(null);
    };

    const handleAddRequest = () => {
        setAddNewItem(true);
    };

    return {
        confirmationDialog,
        isLoading,
        currentItemId,
        handleDelete,
        handleEditRequest,
        handleDeleteRequest,
        handleCancel,
        handleAddRequest,
        addNewItem,
        updateItem,
    };
}
