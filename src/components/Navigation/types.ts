export interface ISubItem {
    readonly id: number;
    readonly link: string;
    readonly text: string;
}
export interface INavigationData {
    readonly id: number;
    readonly link: string;
    readonly text: string;
    readonly subItems?: ISubItem[];
}

export interface IHeaderItem {
    readonly isSubItems: boolean;
    readonly navigation: INavigationData;
    readonly isOpenNav: boolean;
}

export interface IMenuToggle {
    readonly toggle: () => void;
    readonly isOpen: boolean;
}
