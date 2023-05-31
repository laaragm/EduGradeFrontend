import { ISimplifiedSubject } from "./simplified-subject";

export interface ISimplifiedGrade {
    id: number;
    value: number;
    subject: ISimplifiedSubject;
}
