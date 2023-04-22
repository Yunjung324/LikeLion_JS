function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

const parent = new Parent();
parent.name // '재현'
parent.rename('호준')
parent.name // '호준'

// call의 메서드가 하는 역할: this를 지정하는 대상을 바꿀 수 있음
function Child() {
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}
Child.name