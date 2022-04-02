import { HelpingPeopleType } from "../../constants";

export interface IPersonType {
    readonly id: number;
    readonly text: string;
    readonly type: HelpingPeopleType;
}
export interface IPeopleType {
    readonly id: number;
    readonly name: string;
    readonly position: string;
    readonly image: string;
    readonly text: string;
    readonly linkedin: string;
    readonly email: string;
    readonly type: HelpingPeopleType;
}
