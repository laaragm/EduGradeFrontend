import { ISimplifiedGrade, ISimplifiedTeacher } from "@/modules/shared/models";

export interface ISubject {
    id: number;
    name: string;
    teacher: ISimplifiedTeacher;
    grades: ISimplifiedGrade[];
}

export interface ISubjects {
    data: ISubject[];
}

export interface IDataTableSubject {
    id: number;
    name: string;
    teacherName: string;
}
