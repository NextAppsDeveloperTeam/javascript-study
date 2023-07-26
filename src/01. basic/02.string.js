const ll = console.log;

// ['park', 'kim'] 배열로 분리 (name1, name2, name3 각각 같은 결과가 나오도록)
// {
//   const name1 = 'park kim';
//   const name2 = 'park-kim';
//   const name3 = 'park,kim';
//
//   const str1 = name1.split(' ');
//   const str2 = name2.split('-');
//   const str3 = name3.split(',');
//
//   ll(str1, str2, str3);
// }

// 문자열이 'https' 로 시작하는지 여부 판단
// {
//   const url1 = 'http://google.com';
//   const url2 = 'https://google.com';
//
//   const str1 = url1.startsWith('https');
//   const str2 = url2.startsWith('https');
//
//   ll(str1, str2);
// }

// 문자열이 '.com' 으로 끝나는지 여부 판단
// {
//   const url1 = 'https://naver.com';
//   const url2 = 'https://naver.co.kr';
//
//   const str1 = url1.endsWith('.com');
//   const str2 = url2.endsWith('.com');
//
//   ll(str1, str2);
// }

// 문자열 중 'naver' 단어가 포함되어 있는지 여부 판단
// {
//   const url1 = 'https://google.com';
//   const url2 = 'https://naver.co.kr';
//
//   const str1 = url1.includes('naver');
//   const str2 = url2.includes('naver');
//
//   ll(str1, str2);
// }

// 앞에 0이 붙은 5자리로 변환
// {
//   const text1 = '1'; // 00001 로 변환
//   const text2 = '12'; // 00012 로 변환
//
//   const txt1 = text1.padStart(5, '0');
//   const txt2 = text2.padStart(5, '0');
//
//   ll(txt1, txt2);
// }

// 뒤에 0이 붙은 5자리로 변환
// {
//   const text1 = '1'; // 10000 로 변환
//   const text2 = '12'; // 12000 로 변환
//
//   const txt1 = text1.padEnd(5, '0');
//   const txt2 = text2.padEnd(5, '0');
//
//   ll(txt1, txt2);
// }

// 'good' 문자열이 포함되어 있는지 여부 판단
// {
//   const text1 = 'abcdgoodefg';
//   const text2 = 'abcdefghijk';
//
//   const txt1 = text1.includes('good');
//   const txt2 = text2.includes('good');
//
//   ll(txt1, txt2);
// }

// ["5", "3", "6", "2", "1", "4"] 배열로 변환
// {
//   const text = '5-3-6-2-1-4';
//
//   const arr = text.split('-');
//
//   ll(arr);
// }
