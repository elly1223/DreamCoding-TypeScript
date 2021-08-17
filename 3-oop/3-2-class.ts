// 객체지향적으로 커피기계 만들기

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // class는 서로 관련 있는 데이터나 함수들을 한 곳에 묶어놓는 기능을 한다.
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level : class와 연결되어 있기 때문에 object마다 만들어지거나 생성되지 않는다.
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
}
