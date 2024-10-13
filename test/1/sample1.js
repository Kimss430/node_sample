function sum(x, y){
    console.log(x+y);
}
function mul(x, y){
    console.log(x*y);
}

function print(param){
    console.log(param);
}
function printFunc(param){
    param(1,2);
}

print("안녕");
print(123);
print(true);

printFunc(sum);
printFunc(mul);