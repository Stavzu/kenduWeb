export interface ISubItem {
    readonly id: number;
    readonly link: string;
    readonly text: string;
}
export interface INavigationData {
    readonly id: number;
    readonly link?: string;
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

export interface ISubItems {
    readonly onOpen: () => void;
    readonly navigation: INavigationData;
    readonly onClose: () => void;
    readonly hasActiveUrl: boolean;
}

export interface IMenuItem {
    readonly children: React.ReactNode;
    readonly navigation: INavigationData;
    readonly activeUrl: string;
}

export interface IFooterNavigationData {
    readonly id: number;
    readonly text: string;
    readonly link: string;
}
