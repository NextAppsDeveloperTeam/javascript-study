const ll = console.log;

{
  function promiseTest() {
    ll('promiseTest start');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.trunc(Math.random() * 2) === 0) {
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }

  promiseTest()
    .then(() => {
      ll('promise then');
    })
    .catch(() => {
      ll('promise catch');
    })
    .finally(() => {
      ll('promise finally');
    });
}
