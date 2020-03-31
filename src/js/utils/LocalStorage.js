class LocalStorage {
  setItemString(key, value) {
    localStorage.setItem(key, value);
  }

  setItemObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  getItemString(key) {
    return localStorage.getItem(key);
  }

  getItemObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default new LocalStorage();
