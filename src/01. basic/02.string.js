const ll = console.log;

// 문자열 합치기
{
  const name = 'park';
  ll('BAD! Hello, ' + name + '!'); // !!!! 문자열 합칠 때 이 방식 사용하지 않음
  ll(`GOOD! Hello, ${name}!`); // 이 방식으로 사용
}

// TODO: ['park', 'kim'] 배열로 분리 (name1, name2, name3 각각 같은 결과가 나오도록)
{
  const name1 = 'park kim';
  const name2 = 'park-kim';
  const name3 = 'park,kim';
}

// TODO: 문자열이 'https' 로 시작하는지 여부 판단
{
  const url1 = 'http://google.com';
  const url2 = 'https://google.com';
}

// TODO: 문자열이 '.com' 으로 끝나는지 여부 판단
{
  const url1 = 'https://naver.com';
  const url2 = 'https://naver.co.kr';
}

// TODO: 문자열 중 'naver' 단어가 포함되어 있는지 여부 판단
{
  const url1 = 'https://google.com';
  const url2 = 'https://naver.co.kr';
}

// TODO: 앞에 0이 붙은 5자리로 변환
{
  const text1 = '1'; // 00001 로 변환
  const text2 = '12'; // 00012 로 변환
}

// TODO: 뒤에 0이 붙은 5자리로 변환
{
  const text1 = '1'; // 10000 로 변환
  const text2 = '12'; // 12000 로 변환
}

// TODO: 'good' 문자열이 포함되어 있는지 여부 판단
{
  const text1 = 'abcdgoodefg';
  const text2 = 'abcdefghijk';
}

// TODO: ["5", "3", "6", "2", "1", "4"] 배열로 변환
{
  const text = '5-3-6-2-1-4';
}
