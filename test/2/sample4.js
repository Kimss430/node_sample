function test(callback, delay){
    setTimeout(callback, delay);
}
// test 함수를 만들어서 1초(두번째 매개변수)뒤에 콜백함수가 실행되도록
test(()=>{console.log("첫번째 함수")}, 1000);
