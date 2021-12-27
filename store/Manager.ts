import { makeAutoObservable } from 'mobx';
import { Manager } from 'types/manager';

class Managers {
  email = '';
  grade = 0;
  id = '';
  permissionLevel = 0;

  constructor() {
    makeAutoObservable(this);
  }

  currentManager(props: Manager) {
    this.email = props.email;
    this.grade = props.grade;
    this.id = props.id;
    this.permissionLevel = props.permissionLevel;
  }
}

export const currentManager = new Managers();
