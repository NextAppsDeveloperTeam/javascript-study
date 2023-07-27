const ll = console.log;

// 배열 앞에 7 추가 [7, 3, 6, 2, 1, 4, 5]
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   arr.unshift(7);
//
//   ll(arr);
// }

// 배열 뒤에 7 추가 [3, 6, 2, 1, 4, 5, 7]
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   arr.push(7);
//
//   ll(arr);
// }

// "1-2-3-4-5-6" 문자열 변환
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//
//   ll(arr.join('-'));
// }

// Array.sort 이용하여 최대값, 최소값 찾기
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//
//   const maxNum = arr.sort((a, b) => a - b)[0];
//   const minNum = arr.sort((a, b) => b - a)[0];
//
//   ll(maxNum, minNum);
// }

// TODO: for/of 이용하여 합계, 최대값, 최소값 찾기
{
  // const arr = [3, 6, 2, 1, 4, 5];
  const arr = [300, 200, 100, 400, 500, 100];

  let sum = 0;
  let maxNum = arr[0];
  let minNum = arr[0];

  for (const i of arr) {
    sum += i;
    minNum = Math.min(minNum, i); // !!! 이렇게 사용하면 for of 안에 있을 필요가 없음. Spread Operator 사용하지 말고 해결.
    maxNum = Math.max(maxNum, i); // !!! 이렇게 사용하면 for of 안에 있을 필요가 없음. Spread Operator 사용하지 말고 해결.
  }
  ll(sum, minNum, maxNum);
}

// Array.forEach 이용하여 합계 계산
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//
//   let sum = 0;
//   arr.forEach((num) => (sum += num));
//
//   ll(sum);
// }

// TODO: Array.forEach 이용하여 최소값, 최소값 찾기
{
  const arr = [3, 6, 2, 1, 4, 5];

  let maxNum = arr[0];
  let minNum = arr[0];
  arr.forEach((num) => {
    minNum = Math.min(minNum, num); // !!! 이렇게 사용하면 forEach 안에 있을 필요가 없음. Spread Operator 사용하지 말고 해결.
    maxNum = Math.max(maxNum, num); // !!! 이렇게 사용하면 forEach 안에 있을 필요가 없음. Spread Operator 사용하지 말고 해결.
  });
  ll(minNum, maxNum);
}

// // Array.find 이용하여 1 찾기
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   const findNum = arr.find((num) => num === 1);
//
//   ll(findNum);
// }

// Array.filter 이용하여 짝수만 찾기 [6, 2, 4]
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   const findNum = arr.filter((num) => num % 2 === 0);
//
//   ll(findNum);
// }

// Array.map 이용하여 [4, 7, 3, 2, 5, 6] 변환 (각 항목에 +1)
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   const nums = arr.map((num) => num + 1);
//
//   ll(nums);
// }

// Array.reduce 이용하여 합계 계산
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   const sum = arr.reduce((a, b) => a + b);
//
//   ll(sum);
// }

// Array.reduce 이용하여 최소값, 최대값 찾기
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   const min = arr.reduce((a, b) => Math.min(a, b));
//   const max = arr.reduce((a, b) => Math.max(a, b));
//
//   ll(min, max);
// }

// // Spread Operator(...) 이용하여 두 배열을 하나로 합침. [3, 6, 2, 1, 4, 5]
// {
//   const arr1 = [3, 6, 2];
//   const arr2 = [1, 4, 5];
//   const arr3 = [...arr1, ...arr2];
//
//   ll(arr3);
// }

// Array.forEach 이용하여 arr1 에 arr2 추가. (최종적으로 arr1이 [3, 6, 2, 1, 4, 5] 가 되어야함)
// {
//   const arr1 = [3, 6, 2];
//   const arr2 = [1, 4, 5];
//   arr2.forEach((num) => arr1.push(num));
//
//   ll(arr1);
// }

// arr1 에 arr2, num 추가. (최종적으로 arr1이 [3, 6, 2, 1, 4, 5] 가 되어야함)
// {
//   const arr1 = [3, 6, 2];
//   const arr2 = [1, 4];
//   const num = 5;
//
//   arr1.push(...arr2, num);
//   ll(arr1);
// }

// 평균값 계산
// {
//   const arr = [3, 6, 2, 1, 4, 5];
//   const sum = arr.reduce((a, b) => a + b);
//
//   ll(sum / arr.length);
// }

// 문자 배열 중 'good' 단어 포함된 항목만 추출
// {
//   const arr = ['foiwef', 'ciwegoodaoiew', 'fieuwe', 'goodowiegj'];
//   const findStr = arr.filter((str) => str.includes('good'));
//
//   ll(findStr);
// }
