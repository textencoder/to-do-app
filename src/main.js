import './style.css';

import buildHomePage from './builds/buildHome.js';

import { projectArr, addProjectToMemory, addToDo } from './logic/create.js';

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (err) {
        return (
            err instanceof DOMException &&
            err.name === QuotaExceededError &&
            storage &&
            storage.length !== 0
        );
    }
}

if (storageAvailable('localStorage')) {
    console.log('localStorage access granted');
    //localStorage.setItem('yeet', 'yeet2');
    //console.log('localStorage: ', localStorage)
    for (const [key, value] of Object.entries(localStorage)) {
      if (key != length) {
              addProjectToMemory(JSON.parse(key))
              for (const item of JSON.parse(value)) {
                //console.log('item values: ', Object.values(item))
                addToDo(Object.keys(localStorage).indexOf(key), ...Object.values(item))
              }           
          }
          //console.log('index: ', Object.keys(localStorage).indexOf(key))
    }
} else {
    console.log('access denied!')
}

buildHomePage();