export default class Helper {
  static async sleep(miliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, miliseconds);
    });
  }
}
