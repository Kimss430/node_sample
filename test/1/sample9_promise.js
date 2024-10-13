// reject는 생략 가능
function delay(time){
    var promise = new Promise(
        (resolve) => {
            setTimeout(resolve, time)
        });
    return promise;
}

// 위와 동일
function delay(time){
    return new Promise ((resolve) => setTimeout(resolve, time));
}

// delay 가 Promise 함수가 되서 .then 사용가능
delay(1000)
    .then(()=>{
        console.log(1);
        return delay(1000);
    })
    .then(()=>{
        console.log(2)
        return delay(1000);
    })
    .then(()=>{
        console.log(3)
    });

