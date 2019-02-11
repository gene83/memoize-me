'use strict';

const memoize = (function() {
  const cache = {};

  function getElementById(id) {
    if (id in cache) {
      return cache[id];
    }

    cache[id] = document.getElementById(id);
    return cache[id];
  }

  function querySelector(selector) {
    if (selector in cache) {
      return cache[selector];
    }

    cache[selector] = document.querySelector(selector);
    return cache[selector];
  }

  return {
    getElementById,
    querySelector
  };
})();
