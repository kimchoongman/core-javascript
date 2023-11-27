/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
// console.log('null의 타입은?', typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = 'hello';
const single = 'hello';
const backtick = `hello ${10 + 30}`;

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150;
const floatingPointNumber = 10.123;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bignumber = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = { name: 'eddie' };

// 8. 고유한 식별자(unique identifier)

const unique = Symbol('me');
const unique2 = Symbol('me');

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'eddie',
  age: 25,
  sayHi: function () {
    console.log('hello~');
  },
  alert1: function () {
    // normal function
  },
  alert2() {
    //consise method
  },
  alert3: () => {
    //arrow function
  },
};
user.sayHi();

// Array
const newArray = new Array([1, 2, 3]);

const arr = [10, 100, 1000, 1, 2, 3];

// function
function 붕어빵틀(재료) {
  return `냠냠 ${재료}붕어빵`;
}

const a = 붕어빵틀('누텔라');
console.log(a);

// this