function insertionSort() {
  let a = [31, 41, 59, 26, 41, 58];

  let key;
  let j;

  for (let i = 1; i < a.length; i++) {
    key = a[i]; //31
    j = i - 1; // 0

    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j]; // a= 41,41
      j = j - 1; // -1
    }
    a[j + 1] = key; // a = 31,41
  }

  console.info(a);
}

insertionSort();
