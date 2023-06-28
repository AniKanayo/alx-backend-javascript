function getResponseFromAPI() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, _reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // API call successful
      const response = { data: 'Sample response' };
      resolve(response);

      // Uncomment the following code to simulate an API call failure
      // _reject(new Error('API call failed'));
    }, 2000);
  });
}

export default getResponseFromAPI;
