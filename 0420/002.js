function PersonGenerator() {
    let age = 25;  // 비공개 프로퍼티가 됨

    function innerPersonType() {
    };
    innerPersonType.prototype.getAge = function(){
        return age;
    }
    return innerPersonType;
    //innerPersonType으로 만든 인스턴스가 getAge를 사용할 수 있게 됨.
}

const Person =  PersonGenerator(); //innerPersonType이 return값이므로 할당될 것
const myPerson = new Person(); 

// person.age로 하면 접근할 수 없다고 함. 비공개로 전환됨
// 클로저의 경우 장점은 비공개 프로퍼티로 만들 수 있다는 거 하나,,!


function PersonGenrator() {
    let age = 25;

    function InnerPersonType() { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    return InnerPersonType;
}
// age에 접근하려면 무조건 InnerPersonType을 통해 클로저 패턴에 접근할 수 밖에 없이 함.

const Person = PersonGenrator();
const myPerson = new Person();

const PersonGenerator2 = (function () {
    let age = 25;

    function InnerPersonType() { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();