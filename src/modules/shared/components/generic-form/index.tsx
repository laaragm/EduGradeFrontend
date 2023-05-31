import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";

import { CustomButton } from "../custom-button";
import { CustomTextField } from "../custom-text-field";

interface FormField {
    name: string;
    label: string;
    defaultValue?: string | number | boolean;
}

interface Form {
    [key: string]: string | number | boolean;
}

interface GenericFormProps {
    fields: FormField[];
    isLoading: boolean;
    onCancel: () => void;
    onSubmit: (data: any, resetForm: () => void) => void;
}

export function GenericForm({ fields, isLoading, onSubmit, onCancel }: GenericFormProps) {
    const { control, handleSubmit, reset } = useForm<Form>({
        values: fields.reduce(
            (obj, item) => ({
                ...obj,
                [`${item.name}`]: !!item.defaultValue ? item.defaultValue : "",
            }),
            {}
        ),
    });

    const onSubmitData = (data: any) => {
        onSubmit(data, reset);
    };

    const onCancelEdition = () => {
        reset();
        onCancel();
    };

    return (
        <Stack px={2}>
            <form onSubmit={handleSubmit(onSubmitData)}>
                {fields.map((item) => (
                    <Stack mb={2} key={item.name}>
                        <Typography variant="h6" component="label" htmlFor={item.name}>
                            {item.label}
                        </Typography>
                        <Controller
                            key={item.name}
                            name={item.name}
                            control={control}
                            render={({ field }) => (
                                <CustomTextField name={item.name} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </Stack>
                ))}
                <Stack
                    direction="row"
                    width="100%"
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={1}
                    mr={2}
                    mb={1}>
                    <CustomButton size="small" color="secondary" onClick={onCancelEdition}>
                        Cancelar
                    </CustomButton>
                    <CustomButton type="submit" size="small" loading={isLoading}>
                        Salvar
                    </CustomButton>
                </Stack>
            </form>
        </Stack>
    );
}
