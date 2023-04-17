// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());
//foo()를 부르는게 아니고 바로 즉시 실행이 되는 것. foo()를 호출할 수 없다.

// 이런 함수가 어디서 쓰일까요?
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법

function $(s) {
    return document.querySelector(s)
}

$('.test')

// call by value, reference, sharing
// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 됩니다!
// call by value(값의 전달)
// call by reference(참조-주소값의 전달)
// 면접질문 : javascript의 call by value, call by reference에 대해서 설명하세요
// 답변 : javascript는 call by value만 존재합니다.
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Call-by-Value-Call-by-Reference

let test1 = [10, 20, 30]
let test2 = 100

// 많이 헷갈려 하시기 때문에 꼭 기억해주세요.
function 값변경1(arr) {
    arr[0] = 100
}
값변경1(test1)
console.log(test1)

function 값변경2(value) {
    value = 1000
}
값변경2(test2)
console.log(test2)

// call by ref가 없는 반례
// 반례
var a = {};
function test(b) {
    b = 1000;
}

test(a)
a // 다른 언어의 경우 call by ref로 동작하여 a의 값이 1000으로 바뀝니다.


// 자바스크립트는 call by value만 있고 call by reference가 없음
// call by ref가 없는 반례
// 반례
var a = {};
function test(b) {
    b = 1000;
}

test(a)
a