export function printMe() {
    console.log("Hello world");
}

export const increaseCallBack = (number, callback) => {
    setTimeout(() => {
        const result = number + 10;
        if (callback) {
            callback(result);
        }
    }, 1000);
}

export const increasePromise = (number) => {
    const promise = new Promise((response, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result >= 50) {
                const e = new Error('Number to Big');
                return reject(e);
            }
            response(result)
        }, 1000);
    });
    return promise;
}

export const increaseAsync = (number) => {
    const promise = new Promise((response, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result >= 50) {
                const e = new Error('Number to Big');
                return reject(e);
            }
            response(result)
        }, 1000);
    });
    return promise;
}