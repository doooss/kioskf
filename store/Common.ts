import { makeAutoObservable } from 'mobx';

class Common {
  title = 'Home';

  constructor() {
    makeAutoObservable(this);
  }

  changeTitle(props: string) {
    this.title = props;
  }
}

export const common = new Common();
