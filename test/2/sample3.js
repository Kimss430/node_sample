function test(){
    console.log("테스트 함수!");
}
setTimeout(test, 2000);

setTimeout(function (){
    console.log("테스트 함수!");
}, 2000);

setTimeout(()=>{
    console.log("테스트 함수!");
} , 2000);