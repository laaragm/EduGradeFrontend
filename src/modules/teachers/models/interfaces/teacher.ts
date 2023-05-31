import { ISimplifiedSubject } from "@/modules/shared/models";

export interface ITeacher {
    id: number;
    name: string;
    cpf: string;
    expertiseAreas: string;
    subjects: ISimplifiedSubject[];
}
