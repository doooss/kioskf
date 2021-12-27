import { makeAutoObservable } from 'mobx';

class Common {
  title = 'Home';

  orderState = false;

  signInState = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeTitle(props: string) {
    this.title = props;
  }
  changeOrderState() {
    this.orderState = !this.orderState;
  }

  makeSignInStateToFalse() {
    this.signInState = false;
  }

  makeSignInStateToTrue() {
    this.signInState = true;
  }
}

export const common = new Common();
