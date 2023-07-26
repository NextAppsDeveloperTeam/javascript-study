const ll = console.log;

// { id: 1, name: 'kim' } 으로 변경 (name 값 변경)
// {
//   const obj = { id: 1, name: 'park' };
//   obj.name = 'kim';
//
//   ll(obj);
// }

// { id: 1, name: 'park', tel: '010-1234-5678' } 로 변경 (항목 추가)
// {
//   const obj = { id: 1, name: 'park' };
//   obj.tel = '010-1234-5678';
//
//   ll(obj);
// }

// 주어진 key, value 로 값 변경. { id: 1, name: 'kim' }
// {
//   const obj = { id: 1, name: 'park' };
//   function setValue(key, value) {
//     // 이곳에 코드 작성
//     obj[key] = value;
//     ll(obj);
//   }
//   setValue('name', 'kim');
// }

// 모든 key 배열로 구하기. ['id', 'name']
// {
//   const obj = { id: 1, name: 'park' };
//
//   ll(Object.keys(obj));
// }

// TODO: 모든 value 값 합산. key 를 모른다고 가정해야함
// !!! (1) Object.keys, Array.reduce 함수를 사용하여 한번에 처리
{
  const obj = { n1: 323, n2: 553, n3: 234, n4: 553, n5: 952 };

  ll(Object.values(obj).reduce((a, b) => a + b));
}
