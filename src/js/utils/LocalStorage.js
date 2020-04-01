class LocalStorage {
  setItemString(key, value) {
    localStorage.setItem(key, value);
  }

  setItemObject(key, object) {
    localStorage.setItem(`user:${key}`, JSON.stringify(object));
  }

  getItemString(key) {
    return localStorage.getItem(`user:${key}`);
  }

  getItemObject(key) {
    return JSON.parse(localStorage.getItem(`user:${key}`));
  }

  containsKey(key) {
    if (localStorage.getItem(`user:${key}`)) {
      return true;
    } else {
      return false;
    }
  }
}

export default new LocalStorage();
