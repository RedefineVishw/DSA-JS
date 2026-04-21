const debounce = (func, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const throttle = (func, interval) => {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      func.apply(this, args);
      lastTime = now;
    }
  };
};

function searchQuery(e) {
  console.log("API Called with: ", e.target.value);
}

const throttleSearch = throttle(searchQuery, 2000);
const debouncedSearch = debounce(searchQuery, 500);

document.getElementById("searchBox").addEventListener("input", throttleSearch);

let s = "aabbcd";
let freq = {};

for (const ch of s) {
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}
console.log(freq);

let counts = {}; // counts of the different frequencies
for (const key in freq) {
  if (counts[freq[key]]) {
    counts[freq[key]]++;
  } else {
    counts[freq[key]] = 1;
  }
}
console.log(counts);
