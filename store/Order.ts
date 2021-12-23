import { makeAutoObservable } from 'mobx';
import { Menu, OrderMenu } from '../types/menu';

class Order {
  orderMenu: OrderMenu[] = [];
  totalPrice = 0;

  constructor() {
    makeAutoObservable(this);
  }

  changeOrderMenu(param: Menu) {
    const isExist = this.orderMenu.find((menu) => menu.name === param.name);
    if (!isExist) {
      this.orderMenu.push({ name: param.name, price: param.price, amount: 1 });
    } else {
      this.orderMenu.map((a) => {
        if (a.name === param.name) {
          a.amount++;
        }
      });
    }
    this.totalPrice = 0;
    this.orderMenu.map((a) => {
      this.totalPrice = this.totalPrice + a.price * a.amount;
    });
  }

  plusOrderAmount(param: string) {
    this.orderMenu.map((a) => {
      if (a.name === param) {
        a.amount++;
      }
    });
    this.totalPrice = 0;
    this.orderMenu.map((a) => {
      this.totalPrice = this.totalPrice + a.price * a.amount;
    });
  }
  minusOrderAmount(param: string) {
    this.orderMenu.map((a, i) => {
      if (a.name === param) {
        a.amount--;
      }
      if (a.amount === 0) {
        this.orderMenu.splice(i, 1);
      }
    });
    this.totalPrice = 0;
    this.orderMenu.map((a) => {
      this.totalPrice = this.totalPrice + a.price * a.amount;
    });
  }
  clearPrice() {
    this.orderMenu = [];
    this.totalPrice = 0;
  }
}

export const order = new Order();
