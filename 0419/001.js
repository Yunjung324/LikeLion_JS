const me = {
    name : '웨이드',
    address : '제주도 제주시 인다 1길',
    phoneNum : '010-8001-6536',
    canWalk : function(){
        console.log('웨이드가 걷는다.');
    },
    teaching : function(myStudent){
        myStudent.levelUp();
    }
}
const student = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}


const yj = {
    name : '윤정',
    address: '안양시',
    phoneNum : '010-7768-4697',
    major: 'computer information and communication engineering',

}

////// 위 내용을 class로 /////
class Yunjung {
    constructor(name){
        this.name = name,
        address = "안양시"
    }
}


function NewFactory(name){
    this.name = name;
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

const robot = new NewFactory("재현");
// this는 robot이라는 인스턴스를 참조한다.


function FoodPicker(food){
    this.food = food;
    this.tellFood = function(){
        console.log(`${this.name}`)
    }
}
const eat = new FoodPicker(['짜장면', '청국장', '김치찌개'])