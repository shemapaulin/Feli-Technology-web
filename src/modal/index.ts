export type ChildrenProps = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  // isVisible: boolean;
  // other?: any;
};

export interface HighlightsProps {
  image: string | undefined;
  name: string;
}

export interface PartnerReview {
  id: string;
  picture: string | undefined;
  name: string;
  review: string;
}

export interface SubItem {
  value: string;
}

export interface Item {
  title: string;
  label: string;
  items: SubItem[];
}

export interface Comments {
  title: string;
  description: string;
  image: string;
  customer_name: string;
  role: string;
}

export interface Services {
  title: string;
  description: string;
  icon: string;
  bg: string;
  label: string;
  link: string;
}

export interface Counter {
  count: number;
  label: string;
}

export interface Support {
  title: string;
  description: string;
  icon: string;
  label: string;
  link: string;
}

export interface SubItemLabel {
  sub_value_1: string;
  sub_value_2: string;
}

export interface DesignItem {
  title: string;
  image: string;
  icon: string;
  
}

export interface DesignItemDescription {
  icon: string;
}
