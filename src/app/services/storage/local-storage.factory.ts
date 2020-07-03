export class LocalStorageFactory {
  static create(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined') {
        return resolve(window.localStorage);
      }
      return reject();
    })
    .catch((err) => {
      console.warn('Storage has not been initialized');
      return null;
    });
  }
}
