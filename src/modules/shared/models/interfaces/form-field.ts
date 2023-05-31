import { FieldType } from "../enums";

export interface IFormField {
    name: string;
    label: string;
    type: FieldType;
    defaultValue?: string | number | boolean;
    options?: Array<{ id: number; name: string }>;
}
