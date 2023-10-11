function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;

  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }

    if(arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }
  
  let avg = Number((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  
  if (arr.length !== 0) {
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  
  min = Math.min(...arr);
  max = Math.max(...arr);

  if (arr.length !== 0) {
    let diference = max - min;
    return diference;
    } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  if (arr.length !== 0) {
    let diference = sumEvenElement - sumOddElement;
    return diference;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      countEvenElement++;
      sumEvenElement += arr[i];
    }
  }

  if (arr.length !== 0) {
    let averageEvenElement = sumEvenElement / countEvenElement;
    return averageEvenElement;
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i];
    let result = func(...arr);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult; 
}
