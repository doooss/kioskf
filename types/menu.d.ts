export type Menu = {
  imgurl: string;
  name: string;
  price: number;
  menuType?: string;
  amount?: number;
};

export type OrderMenu = {
  name: string;
  price: number;
  amount: number;
};
