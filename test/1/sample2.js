function printFunc(param){
    param(1, 2);
}
// function sum(x, y){
//     console.log(x+y);
// }

// 익명함수
// 한번만 쓰고 안쓸때 쓰기 쉽게
printFunc(function (x, y){
    console.log(x+y);
});

// 화살표 함수
printFunc((x, y) => {
    console.log(x*y);
});
// 중괄호 생략가능
printFunc((x, y) => console.log(x*y));
