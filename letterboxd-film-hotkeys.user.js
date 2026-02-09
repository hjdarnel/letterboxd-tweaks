// ==UserScript==
// @name         Letterboxd Film Hotkeys
// @namespace    hjdarnel
// @version      1.0.0
// @description  Press W to toggle watchlist status
// @author       Henry Darnell https://github.com/hjdarnel
// @include      /^https:\/\/letterboxd\.com\/film\/[^\/]+\/$/
// @downloadURL  https://raw.githubusercontent.com/hjdarnel/letterboxd-tweaks/main/letterboxd-film-hotkeys.user.js
// @updateURL    https://raw.githubusercontent.com/hjdarnel/letterboxd-tweaks/main/letterboxd-film-hotkeys.user.js
// @icon         https://letterboxd.com/favicon.ico
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
