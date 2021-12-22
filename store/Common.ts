import { makeAutoObservable } from 'mobx';

class Common {
  title = 'Home';

  orderstate = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeTitle(props: string) {
    this.title = props;
  }
  changeorderState() {
    this.orderstate = !this.orderstate;
  }
}

export const common = new Common();
