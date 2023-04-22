function Jaehyun() {
    this.age = 20;
}

Jaehyun.prototype.name = "재현"

const jaehyun1 = new Jaehyun();
const jaehyun2 = new Jaehyun();
const jaehyun3 = new Jaehyun();

jaehyun1.age();
jaehyun2.age();
jaehyun3.age(); // 전부 다 20으로 출력

// 인스턴스에 접근할 때는 __proto__ 사용
// 프로토타입은 인스턴스가 바라보는 것
jaehyun1.__proto__.name = "소을";
jaehyun2.__proto__.name = "소을";
jaehyun3.__proto__.name = "소을";