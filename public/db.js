// Get indexedDB from the browser window object
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

let db;

// Open a connection to the indexedDB
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = ({ target }) => {
  db = target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
  db = target.result;

  // check if app is online before reading from DB
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = ({ target }) => {
  console.log(`IndexedDB Error - ${target.errorCode}`);
};

// function to read from IndexedDB to get all transactions
// if transactions are retrieved then they are posted to the DB
// and IndexedDB is cleared
function checkDatabase() {}
