export default class Storage {
  static setValue(name, value) {
    localStorage.setItem(name, value);
  }

  static getValue(name) {
    return localStorage.getItem(name);
  }

  static clear() {
    localStorage.clear();
  }

  static login(loginObj) {
    localStorage.setItem('username', loginObj.username);
    localStorage.setItem('apiToken', loginObj.apiToken);
  }
}
