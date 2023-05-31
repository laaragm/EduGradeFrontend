import { ISimplifiedStudent, ISimplifiedSubject } from "@/modules/shared/models";

export interface IGrade {
    id: number;
    value: number;
    subject: ISimplifiedSubject;
    student: ISimplifiedStudent;
}
