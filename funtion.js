// This is the actual answer of the hacker ranks enccryption problem the hacker rank solution is a faluty one. 
let s = "if man was meant to stay on the ground god would have given us roots";

// step 1: Remove white spaces
let trimmed = s.replace(/\s+/g, "").trim();
let n = trimmed.length;
let r = Math.floor(Math.sqrt(n));
let row = r;
let col = r + 1;

let min = r * (r + 1);
// step 2: find the lowest row * column combination
for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    let minsum = i * j;
    if (minsum >= n && minsum < min) {
      row = i;
      col = j;
      min = minsum;
    }
  }
}
console.log(row, col);

let arr = [];
let k = 0;
// step 3: form an array
for (let i = 0; i < row; i++) {
  arr[i] = [];
  for (let j = 0; j < col; j++) {
    if (k < n) {
      arr[i][j] = trimmed[k];
      k++;
    } else {
      arr[i][j] = "";
    }
  }
}
console.log(arr);

// step 4: form a final string
let finalresult = "";
for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    if (arr[j][i] != "") {
      finalresult += arr[j][i];
    }
  }
  finalresult += " ";
}
console.log(finalresult.trim());
