function print1(){
    console.log("첫번째 출력");
}

setTimeout(print1, 1000);

// 익명함수
setTimeout(function (){
    console.log("두번째 출력");
}, 1000);

// 화살표 함수
setTimeout(() => {
    console.log("세번째 출력");
}, 1000);

// 중괄호 x
setTimeout(() => console.log("네번째 출력"), 1000);
