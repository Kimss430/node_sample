function func1(callback) {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
}
function func2(callback) {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000);
}
function func3(callback) {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000);
}
function func4(callback) {
    setTimeout(() => {
        console.log(4);
        callback();
    }, 1000);
}

func1(() => {
    func2(() => {
        func3(() => {
            func4(() => {
                setTimeout(() => {
                    console.log("끝");
                }, 1000);
            });
        });
    });
});


// recursiveCallback
function fun1(count, callback) {
    setTimeout(() => {
        console.log(count);  // 현재 count 값을 출력
        if (count < 4) {     // count가 4보다 작을 때만 재귀 호출
            callback(count + 1);
        }
    }, 1000);
}

function recursiveCallback(nextCount) {
    fun1(nextCount, recursiveCallback);  // 다음 count 값으로 재귀 호출
}

// 처음 호출: 1부터 시작
fun1(1, recursiveCallback);


