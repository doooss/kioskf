import { makeAutoObservable } from 'mobx';

class Order {
  orderMenu = [{ menuId: 1, amount: 0 }];
  totalPrice = 0;
  constructor() {
    makeAutoObservable(this);
  }

  changeOrderMenu(param: number, param2: number) {
    const isExist = this.orderMenu.find((order) => order.menuId === param);
    if (isExist === undefined) {
      this.orderMenu.push({ menuId: param, amount: param2 });
    } else {
      isExist.amount = isExist.amount + param2;
      isExist.amount <= 0
        ? this.orderMenu.splice(
            this.orderMenu.findIndex((order) => order.menuId === param),
            1,
          )
        : null;
    }
  }

  plusPrice(props: number) {
    this.totalPrice = this.totalPrice + props;
  }
  clearPrice() {
    this.totalPrice = 0;
  }
}

export const order = new Order();
