let start = Date.now();

const result = (x) => {
    console.log(`${x}가 실행되는데 걸리는 시간: ${Date.now()-start}`);
}

const asyncBlocking = () => {
    return new Promise((resolve) =>{
        let i = 0;
        while(i < 99999999) {
            i++
        }
        resolve("blocking finished")
    })
}

result('동기식 코드1');

setTimeout(()=> {
    result('setTimeout finished');
}, 0)

// 프로미스 객체를 만드는 과정은 동기적으로 진행됩니다!
// result(asyncBlocking());
// then도 콜백함수를 부름
result(asyncBlocking().then((txt) => {
    result(txt);
    // then의 결과는 blocking finished가 실행되는데 걸리는 시간으로 나온다.
}));
result('동기식 코드2');