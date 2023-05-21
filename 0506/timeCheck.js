/// 비동기로 동작함을 보여주는 코드
let start = Date.now();

const result = (x) => {
    console.log(`${x}가 실행되는데 걸리는 시간: ${Date.now()-start}`);
}

const blocking = () => {
    let i = 0;
    while(i < 99999999) {
        i++
    }
    return "blocking finished";
}

result('동기식 코드1');
result(blocking());
result('동기식 코드2');