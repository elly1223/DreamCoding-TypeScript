// 절차지향적으로 커피기계 만들기

{
  type CoffeeCup = {
    // CoffeeCup의 type을 정의한다.
    shots: number;
    hasMilk: boolean;
  };

  // 1 shot당 얼마나 많은 커피 콩이 필요한지...
  const BEANS_GRAMM_PER_SHOT: number = 7;

  // 커피 콩을 정의한다. 총 몇 개의 콩이 있는지 그램(g)으로 표시한다.
  let coffeeBeans: number = 0;

  // 얼마나 많은 shot을 만들 것인지? 의 함수
  function makeCoffee(shots: number): CoffeeCup {
    // 커피 양이 작다면
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT; // 커피를 만든 만큼 커피 콩의 그램(g) 수는 줄어든다.
    return {
      shots, // **key와 value의 이름이 동일하면 생략 가능!
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT; // 커피 콩 충전
  const coffee = makeCoffee(2); // 더블 샷 커피를 만든다.
  console.log(coffee);
}
