export interface SideNavModel {
    pageTitle: string;
    link: string;
    list: List[];
}

export interface List {
    title: string;
    isActive: boolean;
    route: string;
}
