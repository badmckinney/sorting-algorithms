const unsorted = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];

//--------------------------------------------//
//               MERGE SORT                   //
//--------------------------------------------// 

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

//--------------------------------------------//
//               QUICK SORT                   //
//--------------------------------------------// 

const quickSort = (arr) => {
  if (arr.length <= 0) {
    return arr;
  }

  let popped = arr.pop();
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > popped) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [].concat(left, popped, right);
};

//--------------------------------------------//
//               SELECTION SORT               //
//--------------------------------------------// 

const selectionSort = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {

    for (let x = i + 1; x < arr.length; x++) {
      if (arr[x] <= arr[i]) {
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
      }
    }
  }

  return arr;
};

//--------------------------------------------//
//               INSERTION SORT               //
//--------------------------------------------// 

const insertionSort = (arr) => {
  let sorted = [];

  while (arr.length > 0) {
    let popped = arr.pop();
    let length = sorted.length;

    if (sorted.length === 0) {
      sorted.push(popped);
    } else if (popped > sorted[length - 1]) {
      sorted.push(popped);
    } else {
      for (let i = 0; i < length; i++) {
        if (sorted[i] >= popped) {
          sorted.splice(i, 0, popped);
          break;
        }
      }
    }
  }

  return sorted;
};