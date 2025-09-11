export interface sidebar_item {
    title: string;

    icon?: string;    
    children? : sidebar_item[];
    isOpen? : boolean;

    ref?: string;

    /* 
        Explanation of variables:

        Title: the displayed title of the sidebar element
        Icon (Optional): The icon that sets to the left of the sidebar element
        Children (Optional): The children of the sidebar that are themselves an element
        isOpen (Optional): This is supposed to be paired with children variable to let the element know if it should display it's children
        ref (Optional): A link that the sidebar element is going to link to once it is clicked
    */
}