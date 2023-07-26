const ll = console.log;

// TODO: 버림하여 1 로 만들기
{
  const num = 1.6;

  ll(Math.floor(num));
}

// TODO: 반올림하여 2 로 만들기
{
  const num = 1.6;

  ll(Math.round(num));
}

// TODO: 올림하여 2 로 만들기
{
  const num = 1.2;

  ll(Math.ceil(num));
}

// TODO: 소수점 3번째 자리에서 버림하여 1.63 으로 만들기
{
  const num = 1.635;

  ll(Math.floor(num * 100) / 100);
}

// TODO: 소수점 3번째 자리에서 반올림하여하여 1.64 로 만들기
{
  const num = 1.635;

  ll(Math.round(num * 100) / 100);
}

// TODO: 소수점 3번째 자리에서 올림하여하여 1.64 로 만들기
{
  const num = 1.632;

  ll(Math.ceil(num * 100) / 100);
}

// TODO: 세 수의 평균값 계산
{
  const num1 = 1;
  const num2 = 2;
  const num3 = 3;

  ll((num1 + num2 + num3) / 3);
}

// TODO: 0 ~ 100 사이의 랜덤 수 추출
{
  ll(Math.floor(Math.random() * 100));
}

// TODO: 30 ~ 50 사이의 랜덤 수 추출
{
  ll(Math.floor(Math.random() * 20) + 30);
}

// TODO: 전체 페이지 수 계산
{
  const perPage = 20; // 한페이지당 노출 수
  const total = 183; // 전체 개수

  ll(perPage * total);
}
