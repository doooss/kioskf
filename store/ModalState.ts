import { makeAutoObservable } from 'mobx';

class ModalState {
  modalState = false;
  constructor() {
    makeAutoObservable(this);
  }

  openLoginModal() {
    this.modalState = true;
  }
  colseLoginModal() {
    this.modalState = false;
  }
}

export const modalState = new ModalState();
