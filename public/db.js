// Get indexedDB from the browser window object
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

// Open a connection to the indexedDB
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = ({ target }) => {
  const db = target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
  const db = target.result;

  // check if app is online before reading from DB
  if (navigator.onLine) {
    checkDatabase(db);
  }
};

request.onerror = ({ target }) => {
  console.log(`IndexedDB Error - ${target.errorCode}`);
};

// function to read from IndexedDB to get all transactions
// if transactions are retrieved then they are posted to the DB
// and IndexedDB is cleared
function checkDatabase(db) {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  const getAll = store.getAll();

  getAll.onsuccess = function () {
    // if not empty then bulk insert all transactions to remote DB
    if (getAll.result.length) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          // delete all records from indexedDB if successful
          const transaction = db.transaction(["pending"], "readwrite");
          const store = transaction.objectStore("pending");
          store.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
