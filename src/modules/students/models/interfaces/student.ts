import { ISimplifiedGrade } from "@/modules/shared/models";

export interface IStudent {
    id: number;
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    registrationNumber: string;
    grades: ISimplifiedGrade[];
}

export interface IStudents {
    data: IStudent[];
}

export interface IDataTableStudent {
    id: number;
    name: string;
    email: string;
    registrationNumber: string;
}
