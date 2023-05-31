import { ISimplifiedGrade } from "@/modules/shared/models";

export interface ISubject {
    id: number;
    name: string;
    teacherId: number;
    grades: ISimplifiedGrade[];
}
