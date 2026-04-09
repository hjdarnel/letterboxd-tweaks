// ==UserScript==
// @name        Letterboxd More At Radarr Button
// @namespace   hjdarnel
// @match       https://letterboxd.com/film/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @version     1.0
// @author      Henry Darnell https://github.com/hjdarnel
// @description Adds a Radarr button to film pages that links to your Radarr instance to add the film
// @downloadURL https://raw.githubusercontent.com/hjdarnel/letterboxd-tweaks/main/letterboxd-add-to-collection.user.js
// @updateURL   https://raw.githubusercontent.com/hjdarnel/letterboxd-tweaks/main/letterboxd-add-to-collection.user.js
// @icon        https://letterboxd.com/favicon.ico
// ==/UserScript==

'use strict';

function promptForBaseUrl() {
  const current = GM_getValue('baseUrl', '');
  const input = prompt(
    'Enter your Radarr base URL (e.g. https://radarr.example.com):',
    current
  );
  if (input !== null) {
    const url = input.replace(/\/+$/, '');
    GM_setValue('baseUrl', url);
    return url;
  }
  return current || null;
}

function getBaseUrl() {
  return GM_getValue('baseUrl', '') || null;
}

GM_registerMenuCommand('Configure Radarr URL', () => {
  const url = promptForBaseUrl();
  if (url) {
    alert(`Radarr URL set to: ${url}\nReload the page to update the link.`);
  }
});

(function () {
  let baseUrl = getBaseUrl();

  // First run: prompt for configuration
  if (!baseUrl) {
    baseUrl = promptForBaseUrl();
    if (!baseUrl) return;
  }

  const footer = document.querySelector('p.text-link.text-footer');
  if (!footer) return;

  const filmName = document
    .querySelector('h1.headline-1')
    ?.textContent?.trim()
    ?.replace(/\u00a0/g, ' ');
  if (!filmName) return;

  const link = document.createElement('a');
  link.href = `${baseUrl}/add/new?term=${encodeURIComponent(filmName)}`;
  link.target = '_blank';
  link.className = 'micro-button track-event';
  link.textContent = 'Radarr';

  const buttonDiv = footer.querySelector('div');
  if (!buttonDiv) return;

  buttonDiv.appendChild(link);
})();
