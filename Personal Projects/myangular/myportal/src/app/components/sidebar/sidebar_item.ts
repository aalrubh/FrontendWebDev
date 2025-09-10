export interface sidebar_item {
    title: string;

    icon?: string;    
    children? : sidebar_item[];
    isOpen? : boolean;
}