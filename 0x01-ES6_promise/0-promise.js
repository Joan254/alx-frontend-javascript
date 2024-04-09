function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}

export default getResponseFromAPI;
