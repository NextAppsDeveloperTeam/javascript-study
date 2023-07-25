const ll = console.log;

// let, const 차이 이해 필요. 변수 선언 시 var 는 사용하지 않음
{
  try {
    let name1 = '자바';

    const name2 = '자바';
    name2 = '스크립트';
  } catch (err) {
    //
  }
}

// ==, != 연산자 사용하지 않음. ===, !== 연산자 사용. (예외적으로 null, undefined 함께 비교할때만 ==, != 사용)
{
  const a = '0';
  if (a == 0) ll('true'); // 절대 사용하지 말자
  if (a === '0') ll('true');

  const b = undefined;
  if (b == null) ll('null or undefined');
}

// Arrow Function
// Function 선언 시 Arrow 사용
{
  function sum1(num1, num2) {
    return num1 + num2;
  }

  const sum2 = (num1, num2) => {
    return num1 + num2;
  };

  const util = {
    num1: 1,
    num2: 2,
    sum1: function () {
      return this.num1 + this.num2;
    },
    sum2() {
      return this.num1 + this.num2;
    },
    sum3: () => {
      return this.num1 + this.num2; // Arrow Function 사용 시 this 사용 불가
    },
  };

  ll(sum1(1, 2)); // --> 3
  ll(sum2(1, 2)); // --> 3
  ll(util.sum1()); // --> 3
  ll(util.sum2()); // --> 3
  ll(util.sum3()); // --> NaN

  setTimeout(() => {
    ll('1초 경과');
  }, 1000);
}

// 배열 항목 변수로 할당
{
  const arr = ['park', '010-3905-2580', 'Male'];
  const [name, tel, gender] = arr;
  ll(name, tel, gender);
}
