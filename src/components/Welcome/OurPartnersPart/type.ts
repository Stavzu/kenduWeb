import { PartnerType } from "../../constants";

export interface ISocialLink {
    readonly id: number;
    readonly type: PartnerType;
    readonly image: React.ReactNode;
    readonly link: string;
}
