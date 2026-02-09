// ==UserScript==
// @name         Letterboxd Film Hotkeys
// @namespace    hjdarnel
// @version      1.0.0
// @description  Press W to toggle watchlist status
// @author       Henry Darnell https://github.com/hjdarnel
// @include      /^https:\/\/letterboxd\.com\/film\/[^\/]+\/$/
// @downloadURL  https://gist.github.com/hjdarnel/a4d5f24dc7917dc85a407a24386c99b1/raw/letterboxd-film-hotkeys.user.js
// @updateURL    https://gist.github.com/hjdarnel/a4d5f24dc7917dc85a407a24386c99b1/raw/letterboxd-film-hotkeys.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

'use strict';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

document.addEventListener('keyup', async (event) => {
  switch (event.code) {
    case 'KeyW': {
      const removeEl = document.querySelector('a.remove-from-watchlist');
      const addEl = document.querySelector('a.add-to-watchlist');

      if (removeEl && !removeEl.parentElement.classList.contains('hidden')) {
        removeEl.click();
      } else if (addEl && !addEl.parentElement.classList.contains('hidden')) {
        addEl.click();
      }
      break;
    }
  }
});
