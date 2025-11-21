function loadScriptPromise(src) {
  // 1. The function returns a new Promise. This promise object represents the future result.
  return new Promise((resolve, reject) => {

    // The logic inside is almost the same as your original function.
    let script = document.createElement('script');
    script.src = src;

    // 2. SUCCESS: When the script loads successfully, we call resolve().
    // This fulfills the promise and passes the 'script' element as the result.
    script.onload = () => resolve(script);

    // 3. FAILURE: If it fails to load, we call reject().
    // This rejects the promise and passes an Error object as the reason.
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    // 4. This starts the asynchronous operation.
    document.head.append(script);
  });
}

// Call the function, which returns a promise.
loadScriptPromise('promises.js')
  .then(script => {
    // This code runs ONLY if the promise is fulfilled (successful).
    console.log(`${script.src} has loaded successfully!`);
    // You can now use functions from the loaded script.
  })
  .catch(error => {
    // This code runs ONLY if the promise is rejected (fails).
    console.error(`An error occurred: ${error.message}`);
  });