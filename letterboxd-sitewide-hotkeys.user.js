// ==UserScript==
// @name         Letterboxd Site-wide Hotkeys
// @namespace    hjdarnel
// @version      1.0.0
// @description  Press / anywhere on Letterboxd to search
// @author       Henry Darnell https://github.com/hjdarnel
// @match        https://letterboxd.com/*
// @downloadURL  https://gist.github.com/hjdarnel/e3c3e5c62b7aa27a5cbfddfcf34258cc/raw/letterboxd-sitewide-hotkeys.user.js
// @updateURL    https://gist.github.com/hjdarnel/e3c3e5c62b7aa27a5cbfddfcf34258cc/raw/letterboxd-sitewide-hotkeys.user.js
// @icon         https://letterboxd.com/favicon.ico
// @grant        none
// ==/UserScript==

'use strict';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

document.addEventListener('keyup', async (event) => {
  const activeElement = document.activeElement;

  if (
    activeElement.tagName === 'INPUT' ||
    activeElement.tagName === 'TEXTAREA'
  ) {
    if (event.code === 'Escape') {
      const cancelSearchEl = document.querySelector(
        'li.js-nav-search-toggle a.nav-search-active'
      );
      if (cancelSearchEl) cancelSearchEl.click();
    }
    return;
  }

  switch (event.code) {
    case 'Slash': {
      document.querySelector('li.navitem > a.replace').click();
      await sleep(100);
      document.querySelector('#search-q').click();
      break;
    }
  }
});
