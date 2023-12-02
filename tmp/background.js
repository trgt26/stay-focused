// background.js
let db = null;

function create_database() {
    const request = window.indexedDB.open('MyTestDB');

    request.onerror = function (event) {
        console.log("Problem opening DB.");
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result;

        let objectStore = db.createObjectStore('roster', {
            keyPath: 'email'
        });

        objectStore.transaction.oncomplete = function (event) {
            console.log("ObjectStore Created.");
        }
    }

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log("DB OPENED.");
        insert_records(roster);

        db.onerror = function (event) {
            console.log("FAILED TO OPEN DB.")
        }
    }
}
// background.js
function insert_records(records) {
    if (db) {
        const insert_transaction = db.transaction("roster", "readwrite");
        const objectStore = insert_transaction.objectStore("roster");

        return new Promise((resolve, reject) => {
            insert_transaction.oncomplete = function () {
                console.log("ALL INSERT TRANSACTIONS COMPLETE.");
                resolve(true);
            }

            insert_transaction.onerror = function () {
                console.log("PROBLEM INSERTING RECORDS.")
                resolve(false);
            }

            records.forEach(person => {
                let request = objectStore.add(person);

                request.onsuccess = function () {
                    console.log("Added: ", person);
                }
            });
        });
    }
}


create_database()
insert_records([3,2,3,4,334]);