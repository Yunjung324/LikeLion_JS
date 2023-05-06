// ## 1. 연습문제

// 1.1 다음 값의 평균을 구하세요.

// 1.2 다음 값의 분산를 구하세요.
// 분산 => (각 값에 - 평균) ** 2


//1
const arr = [10, 20, 30, 10, 20, 30, 40, 10]
var sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
sum/arr.length;

//2
const arr1 = [10, 20, 30, 10, 20, 30, 40, 10]
let sum = 0;
for(let i = 0; i < arr1.length; i++){
    sum += arr1[i];
}
const avg = sum/arr1.length;

for(let i = 0; i < arr1.length; i++){
    console.log((arr1[i] - avg) ** 2);
}