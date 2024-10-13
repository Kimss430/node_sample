// 1초후에 숫자 '1'을 콘솔로 출력하세요.(setTimeout, 화살표 함수)

console.log(0);
setTimeout(() => console.log(1), 1000);
console.log(2);

// 1초 후 1, 2초 후 2, 3초 후 3 출력

setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
        }, 1000);
    }, 1000);
}, 1000);





    