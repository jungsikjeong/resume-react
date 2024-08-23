export interface IintroItem {
  id: number;
  title: string;
  subTitle: string[];
  prevViewText: string;
  mainImage: string;
  contents: string[];
  images: string[];
}

export interface IintroItemRes {
  item: IintroItem;
}
