# Budget Tracker

## Service Worker

### Register a Service Worker

- Check if the browser supports service workers and if it does then add the following code to register your service worker

```javascript
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const register = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log("Service worker registered.", register);
    } catch(error) {
      console.log(error.message);
    }
  });
}
```

- Create a service worker file `service-worker.js` to add code for your service worker