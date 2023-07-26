const ll = console.log;

const Gender = {
  Male: 'm', // 남성
  Female: 'f', // 여성
};

const data = [
  {
    id: 1,
    name: 'park',
    gender: Gender.Male,
    age: 11,
    url: 'http://naver.com',
  },
  {
    id: 2,
    name: 'kim',
    gender: Gender.Male,
    age: 25,
    url: 'https://naver.com',
  },
  {
    id: 3,
    name: 'lee',
    gender: Gender.Female,
    age: 18,
    url: 'http://google.com',
  },
  {
    id: 4,
    name: 'yun',
    gender: Gender.Female,
    age: 8,
    url: 'http://google.com',
  },
];

// TODO: id 값이 짝수인 항묵만 찾기
// !!! Object 배열을 출력해야함
// !!! Array.filter 사용
{
  for (let key in data) {
    if (data[key].id % 2 === 0) {
      ll(data[key]);
    }
  }
}

// TODO: 성별이 여성인 항목만 찾기
// !!! Object 배열을 출력해야함
// !!! Array.filter 사용
{
  for (let key in data) {
    if (data[key].gender === 'f') {
      ll(data[key]);
    }
  }
}

// TODO: 나이의 합계 계산
// !!! Array.reduce 사용
{
  let sum = 0;
  for (let key in data) {
    sum += data[key].age;
  }
  ll(sum);
}

// TODO: 평균 나이 계산
// !!! Array.reduce 사용
{
  let sum = 0;
  for (let key in data) {
    sum += data[key].age;
  }
  ll(sum / data.length);
}

// TODO: 여성의 나이의 합계 계산
// !!! Array.reduce 사용
{
  let sum = 0;
  for (let key in data) {
    if (data[key].gender === 'f') {
      sum += data[key].age;
    }
  }
  ll(sum);
}

// TODO: 나이가 가장 어린 사람 찾기
// !!! Object 를 출력해야함
// !!! Array.reduce 사용
{
  let minAge = data[0].age;
  for (let key in data) {
    if (minAge > data[key].age) {
      minAge = data[key].age;
    }
  }
  ll(minAge);
}

// TODO: 나이가 가장 많은 사람 찾기
// !!! Object 를 출력해야함
// !!! Array.reduce 사용
{
  let maxAge = data[0].age;
  for (let key in data) {
    if (maxAge < data[key].age) {
      maxAge = data[key].age;
    }
  }
  ll(maxAge);
}

// TODO: 나이가 10대 이거나 20대인 사람 찾기
// !!! Object 배열을 출력해야함
// !!! Array.filter 사용
{
  for (let key in data) {
    if (data[key].age >= 10 && data[key].age < 30) {
      ll(data[key]);
    }
  }
}

// TODO: 나이가 10대 이면서 남성인 사람 찾기
// !!! Object 배열을 출력해야함
// !!! Array.filter 사용
{
  for (let key in data) {
    if (data[key].age >= 10 && data[key].age < 20 && data[key].gender === 'm') {
      ll(data[key]);
    }
  }
}

// TODO: url 이 'https' 로 시작하는 항목 찾기
// !!! Object 배열을 출력해야함
// !!! Array.filter 사용
{
  for (let key in data) {
    if (data[key].url.startsWith('https')) {
      ll(data[key]);
    }
  }
}

// TODO: name 값만 array 로 추출 ['park', 'kim', 'lee', 'yun']
// !!! Object.keys 사용할 필요 없음 Array.map 만 사용
{
  const arr = Object.keys(data).map((key) => data[key].name);

  ll(arr);
}

// TODO: 다음과 같이 array 추출 ['park (남)', 'kim (남)', 'lee (여)', 'yun (여)']
// !!! Object.keys 사용할 필요 없음 Array.map 만 사용
{
  const arr = Object.keys(data).map((key) => {
    if (data[key].gender === 'm') {
      return `${data[key].name} (남)`;
    } else if (data[key].gender === 'f') {
      return `${data[key].name} (여)`;
    }
  });

  ll(arr);
}

// 나이 순서대로 정렬. 다음과 같이 출력되어야 함
// [
//   {
//     id: 4,
//     name: 'yun',
//     gender: Gender.Female,
//     age: 8,
//     url: 'http://google.com',
//   },
//   {
//     id: 1,
//     name: 'park',
//     gender: Gender.Male,
//     age: 11,
//     url: 'http://naver.com',
//   },
//   {
//     id: 3,
//     name: 'lee',
//     gender: Gender.Female,
//     age: 18,
//     url: 'http://google.com',
//   },
//   {
//     id: 2,
//     name: 'kim',
//     gender: Gender.Male,
//     age: 25,
//     url: 'https://naver.com',
//   },
// ];
// {
//   const minAge = data.sort((a, b) => a.age - b.age);
//
//   ll(minAge);
// }

// TODO: 각 항목에 is_male (남성여부) key 값 추가. 아래와 같이 출력되어야 함.
// !!! Object.map 사용
// [
//   {
//     id: 1,
//     name: 'park',
//     gender: Gender.Male,
//     age: 11,
//     url: 'http://naver.com',
//     is_male: true,
//   },
//   {
//     id: 2,
//     name: 'kim',
//     gender: Gender.Male,
//     age: 25,
//     url: 'https://naver.com',
//     is_male: true,
//   },
//   {
//     id: 3,
//     name: 'lee',
//     gender: Gender.Female,
//     age: 18,
//     url: 'http://google.com',
//     is_male: false,
//   },
//   {
//     id: 4,
//     name: 'yun',
//     gender: Gender.Female,
//     age: 8,
//     url: 'http://google.com',
//     is_male: false,
//   }
// ]
{
  for (let key in data) {
    data[key].gender === 'm' ? (data[key].is_male = true) : (data[key].is_male = false);
    ll(data);
  }
}
