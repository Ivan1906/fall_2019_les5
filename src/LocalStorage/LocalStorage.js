import uuid from "uuid/v4";

class LocalStorage {
  constructor() {
    this.items = [];
    this._key = "todoReview";
    this._init();
  }

  _init() {
    //localStorage.removeItem(this._key);
    try {
      let items = localStorage.getItem(this._key);
      if (Boolean(items)) {
        this.items = JSON.parse(items);
      }
    } catch (e) {
      console.error(e);
    }
  }

  getItems() {
    return this.items;
  }

  getItemById(id) {
    return this.items.find(item => item.id === id);
  }

  addItem(text) {
    let todo = {
      id: uuid(),
      text
    };
    this.items.push(todo);
    return todo;
  }

  save() {
    try {
      localStorage.setItem(this._key, JSON.stringify(this.items));
    } catch (e) {
      console.error(e);
    }
  }
}

export default LocalStorage;
