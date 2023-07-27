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
    age: 13,
    url: 'http://google.com',
  },
];

// id 값이 짝수인 항묵만 찾기
// {
//   const arr = data.filter((key) => key.id % 2 === 0);
//
//   ll(arr);
// }

// 성별이 여성인 항목만 찾기
// {
//   const arr = data.filter((key) => key.gender === 'f');
//
//   ll(arr);
// }

// 나이의 합계 계산
// {
//   const sum = data.reduce((a, b) => a + b.age, 0);
//
//   ll(sum);
// }

// 평균 나이 계산
// {
//   const sum = data.reduce((a, b) => a + b.age, 0);
//
//   ll(sum / data.length);
// }

// 여성의 나이의 합계 계산
// {
//   const sum = data.filter((key) => key.gender === 'f').reduce((a, b) => a + b.age, 0);
//
//   ll(sum);
// }

// TODO: 나이가 가장 어린 사람 찾기
// !!! 결과 맞지 않음 아래의 항목이 출력되야함
// {
//   id: 1,
//   name: 'park',
//   gender: Gender.Male,
//   age: 11,
//   url: 'http://naver.com',
// }
{
  const min = data.reduce((prev, cur) => (prev > cur ? prev : cur));

  ll(min);
}

// TODO: 나이가 가장 많은 사람 찾기
// !!! 결과 맞지 않음 아래의 항목이 출력되야함
// {
//   id: 2,
//   name: 'kim',
//   gender: Gender.Male,
//   age: 25,
//   url: 'https://naver.com',
// }
{
  const max = data.reduce((prev, cur) => (prev > cur ? cur : prev));

  ll(max);
}

//  나이가 10대 이거나 20대인 사람 찾기
// {
//   const arr = data.filter((key) => key.age >= 10 && key.age < 30);
//
//   ll(arr);
// }

// 나이가 10대 이면서 남성인 사람 찾기
// {
//   const arr = data.filter((key) => key.age >= 10 && key.age < 20 && key.gender === 'm');
//
//   ll(arr);
// }

//  url 이 'https' 로 시작하는 항목 찾기
// {
//   const arr = data.filter((key) => key.url.startsWith('https'));
//
//   ll(arr);
// }

// name 값만 array 로 추출 ['park', 'kim', 'lee', 'yun']
// {
//   const arr = data.map((key) => key.name);
//
//   ll(arr);
// }

// 다음과 같이 array 추출 ['park (남)', 'kim (남)', 'lee (여)', 'yun (여)']
// {
//   const arr = data.map((key) => {
//     if (key.gender === 'm') {
//       return `${key.name} (남)`;
//     } else if (key.gender === 'f') {
//       return `${key.name} (여)`;
//     }
//   });
//
//   ll(arr);
// }

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
// !!! data 값이 아닌 arr 값을 출력했을때 아래와 같이 나와야함.
// !!! 원본 (data) 데이터는 수정하면 안됨
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
//     age: 13,
//     url: 'http://google.com',
//     is_male: false,
//   }
// ]
{
  const arr = data.map((key) => (key.is_male = key.gender === 'm'));
  ll(data);
}
