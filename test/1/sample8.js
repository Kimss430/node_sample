// 대기상태, 성공상태, 실패상태
// promise (pending, fulfilled(success), rejected(fail))

var promise = new Promise((resolve, reject) => {
    var flg = false;
    setTimeout(() => {
        if (flg) {
            resolve("통신 성공!");
        } else {
            reject("통신 실패!");
        }
    }, 1000);
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    
// promise
// 성공 .then
// 실패 .catch
// 성공,실패 상관없이 출력 .finally
