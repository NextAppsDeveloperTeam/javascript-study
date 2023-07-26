const ll = console.log;

// TODO: 배열 앞에 7 추가 [7, 3, 6, 2, 1, 4, 5]
{
  const arr = [3, 6, 2, 1, 4, 5];
  arr.unshift(7);

  ll(arr);
}

// TODO: 배열 뒤에 7 추가 [3, 6, 2, 1, 4, 5, 7]
{
  const arr = [3, 6, 2, 1, 4, 5];
  arr.push(7);

  ll(arr);
}

// TODO: "1-2-3-4-5-6" 문자열 변환
{
  const arr = [3, 6, 2, 1, 4, 5];

  ll(arr.join('-'));
}

// TODO: Array.sort 이용하여 최대값, 최소값 찾기
{
  const arr = [3, 6, 2, 1, 4, 5];

  const maxNum = arr.sort((a, b) => a - b)[0];
  const minNum = arr.sort((a, b) => b - a)[0];

  ll(maxNum, minNum);
}

// TODO: for/of 이용하여 합계, 최대값, 최소값 찾기
{
  const arr = [3, 6, 2, 1, 4, 5];
  // for (... of ... ) {
  //    ...
  // }
  let maxNum = arr[0];
  let minNum = arr[0];
  for (let i of arr) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  ll(minNum, maxNum);
}

// TODO: Array.forEach 이용하여 합계 계산
{
  const arr = [3, 6, 2, 1, 4, 5];

  let sum = 0;
  arr.forEach((num) => (sum += num));

  ll(sum);
}

// TODO: Array.forEach 이용하여 최소값, 최소값 찾기
{
  const arr = [3, 6, 2, 1, 4, 5];

  let maxNum = arr[0];
  let minNum = arr[0];
  arr.forEach((num) => {
    if (num < minNum) {
      minNum = num;
    }
    if (num > maxNum) {
      maxNum = num;
    }
  });
  ll(minNum, maxNum);
}

// TODO: Array.find 이용하여 1 찾기
{
  const arr = [3, 6, 2, 1, 4, 5];
  const findNum = arr.find((num) => num === 1);

  ll(findNum);
}

// TODO: Array.filter 이용하여 짝수만 찾기 [6, 2, 4, 5]
{
  const arr = [3, 6, 2, 1, 4, 5];
  const findNum = arr.filter((num) => num % 2 === 0);

  ll(findNum);
}

// TODO: Array.map 이용하여 [4, 7, 3, 2, 5, 6] 변환 (각 항목에 +1)
{
  const arr = [3, 6, 2, 1, 4, 5];
  const nums = arr.map((num) => num + 1);

  ll(nums);
}

// TODO: Array.reduce 이용하여 합계 계산
{
  const arr = [3, 6, 2, 1, 4, 5];
  const sum = arr.reduce((a, b) => a + b);

  ll(sum);
}

// TODO: Array.reduce 이용하여 최소값, 최대값 찾기
{
  const arr = [3, 6, 2, 1, 4, 5];
  const min = arr.reduce((a, b) => (a < b ? a : b));
  const max = arr.reduce((a, b) => (a > b ? a : b));

  ll(min, max);
}

// TODO: Spread Operator(...) 이용하여 두 배열을 하나로 합침. [3, 6, 2, 1, 4, 5]
{
  const arr1 = [3, 6, 2];
  const arr2 = [1, 4, 5];
  const arr3 = [...arr1, ...arr2];

  ll(arr3);
}

// TODO: Array.forEach 이용하여 arr1 에 arr2 추가. (최종적으로 arr1이 [3, 6, 2, 1, 4, 5] 가 되어야함)
{
  const arr1 = [3, 6, 2];
  const arr2 = [1, 4, 5];
  arr2.forEach((num) => arr1.push(num));

  ll(arr1);
}

// TODO: arr1 에 arr2, num 추가. (최종적으로 arr1이 [3, 6, 2, 1, 4, 5] 가 되어야함)
{
  const arr1 = [3, 6, 2];
  const arr2 = [1, 4];
  const num = 5;

  arr1.push(...arr2, num);
  ll(arr1);
}

// TODO: 평균값 계산
{
  const arr = [3, 6, 2, 1, 4, 5];
  const sum = arr.reduce((a, b) => a + b);

  ll(sum / arr.length);
}

// TODO: 문자 배열 중 'good' 단어 포함된 항목만 추출
{
  const arr = ['foiwef', 'ciwegoodaoiew', 'fieuwe', 'goodowiegj'];
  const findStr = arr.filter((str) => str.includes('good'));

  ll(findStr);
}
