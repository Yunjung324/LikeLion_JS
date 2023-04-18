//this(***)
// this는 자신을 호출한 객체, 자신이 생성할 객체

function a(){ console.log(this) }
a();   //window를 가르킴

function b(){
    console.log('hello world')
}
b()
window.b() //window를 호출

let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
        // this가 누구일까?
        // 실제 코딩할때는 console.log로 찍어보면 됨
        // 1. func1
        // 2. myObj
        // 3. window
    }
}
myObj.func1();  //여기서 this는 myObj를 호출


////////////////////////

let myObj = {
    val1: 100,
    func1: function() {
        console.log(this);
    }
}
let test = myObj.func1;
test() //여기서 this는 window

/////////////////////////

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문입니다.

function sayName(){
    console.log(this)
}

var c = {
    'hello' : 'world'
    'say' : sayName
}

var b = {     // var b = {c} 와 같음
    'c' : c
}

var a = {     //var a = {b} 와 같음
    'b' : b
}

c.say() //c가 출력(hello : 'word' say : f)
b.c.say() // 마찬가지로 c
a.b.c.say() // 마찬가지로 c



// 문제를 조금 더 꼬아보겠습니다.
function sayName(){
    console.log(this)  //이것만 보면 sayName앞에뭐가 있는지를 생각해보기 => window
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c,
    'say': sayName
}

var a = { // var a = {b}
    'b': b,
    'say': sayName
}

/// 추가 예제 ///

var name = 'hojun'

function sayName(){
    console.log(this.name)
}
sayName()

let peter = {
    name : 'Peter Parker',
    say : sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

peter.say()  //Peter Parker
bruce.say()  //Bruce Wayne


////////
function attackBeam(){  //레이저 공격
    this.hp -= 20  //나를 호출한 것에 데미지를 깎는다
}

let zombie = {
    name : 'busan zombie',
    damaged : attackBeam,
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

zombie.damaged()
zombie


//////////////
function attackBeam(){  //레이저 공격
    this.hp -= 20  //나를 호출한 것에 데미지를 깎는다
}
function attackKnife(){  //칼 공격
    this.hp -= 5
}

let zombie = {
    name : 'busan zombie',
    damaged1: attackBeam,
    damaged2: attackKnife
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

zombie.damaged1()  //Beam 공격
zombie.damaged2()  //Knife 공격
zombie.hp  //9975


//this 사용 에시
let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

/////
function a(){
    console.log(this)
    function b(){
        console.log(this)
        function c(){
            console.log(this)
        }
        c()
    }
    b()
}
a()
// a, b, c 모두 window
//위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.