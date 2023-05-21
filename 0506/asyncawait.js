// async function message() {
//     let hello = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('hello');
//         }, 100)
//     })

//     let world = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('world');
//         }, 100)
//     })

//     console.log(`${hello} ${world}`);
// }

// message();

// async await 제외하고 위와 같이

function message1() {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello')
        }, 100)
    }). then((result) => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(result + ' world')
            }, 100)
        }).then((message) => {
            console.log(message);
        })
    })
}
message1();