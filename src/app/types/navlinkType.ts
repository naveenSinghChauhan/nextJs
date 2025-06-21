export interface NavItem {
    label: string;
    href: string;
    hasCategoryItem?: boolean;
    dropdown?: DropdownItem[];
  }
  
  export interface DropdownItem {
    categoryId: string;
    category: string;
    categoryHref: string;
    description: string;
    items?: SubItem[];
  }
  
  export interface SubItem {
    label: string;
    href: string;
  }