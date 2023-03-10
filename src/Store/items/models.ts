export interface IAction {
  type: string;
  payload?: any;
}

export interface IAttributesItem {
  trait_type: string;
  value: string;
}

export interface IItem {
  id: string;
  description: string;
  image: string;
  name: string;
  attributes: IAttributesItem[];
}

export interface IItemsList {
  itemsList: IItem[];
}
