// 1. 1초뒤에 "첫번째"를 출력하고, 그 다음 다시 1초뒤에 "두번째"를 출력하시오.
setTimeout(()=>{
    console.log("첫번째");
    setTimeout(()=>{
        console.log("두번째");
    }, 1000);
}, 1000);

// 2.  
function func1(callback, x, y){
	callback(x,y);
}
func1((x, y)=>{
    console.log(x+y);
}, 10, 20);
// 위 함수(func1)를 호출하고 호출 결과로 x와 y의 덧셈 결과를 출력하시오.

// 3. func2("홍길동", "30", func3);
// 위 코드의 실행 결과로 "홍길동님의 나이는 30입니다"가 콜백 함수에서 출력되도록 
// func2, func3를 정의하시오.
// 또한, 코드 작성이 완료된 후 func3를 익명함수, 화살표 함수로 바꿔보시오.
function func2(name, age, callback){
    callback(name, age);
};
function func3(name, age){
    console.log(`${name}님의 나이는 ${age}입니다.`);
};
func2("홍길동", "30", func3);
func2("홍길동", "30", function (name, age){
    console.log(`${name}님의 나이는 ${age}입니다.`);
});
func2("홍길동", "30", (name, age)=>{
    console.log(`${name}님의 나이는 ${age}입니다.`);
});

// 4. 2개의 숫자를 받아서 덧셈, 뺄셈을 하는 함수들의 집합 모듈을 만들고
// 해당 모듈을 참조하여 해당 함수들을 호출하시오.
 const calc = require("./calc");
 calc.sum(10, 20);
 calc.minus(30, 10);
