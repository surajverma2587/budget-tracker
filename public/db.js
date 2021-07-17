// Get indexedDB from the browser window object
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

// Open a connection to the indexedDB
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = () => {};

request.onsuccess = () => {};

request.onerror = () => {};
