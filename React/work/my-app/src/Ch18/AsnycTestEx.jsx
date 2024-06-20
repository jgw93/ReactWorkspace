import React from "react";
import * as doAsnyc from "./doAsnyc"

function AsnycTestEx(props) {
    const onPrintMe = () => {
        setTimeout(doAsnyc.printMe, 3000);
        console.log("대기중");
    }

    const onCallback = () => {
        console.log("작업시작")
        doAsnyc.increaseCallBack(0, result => {
            console.log(result);
            doAsnyc.increaseCallBack(result, result => {
                console.log(result);
                doAsnyc.increaseCallBack(result, result => {
                    console.log(result);
                    doAsnyc.increaseCallBack(result, result => {
                        console.log(result);
                    })
                })
            })
        })
        console.log("작업종료");
    }


    const onPromise = () => {
        doAsnyc.increasePromise(0)
            .then(number => {
                console.log(number);
                return doAsnyc.increasePromise(number)
            })
            .then(number => {
                console.log(number);
                return doAsnyc.increasePromise(number);
            })
            .then(number => {
                console.log(number);
                return doAsnyc.increasePromise(number);
            })
            .then(number => {
                console.log(number);
                return doAsnyc.increasePromise(number);
            })
            .then(number => {
                console.log(number);
                return doAsnyc.increasePromise(number);
            })
            .catch(e => {
                console.error(e);
            })
    }

    const onAsyncAwait = async () => { // async function onAsyncAwait(){}
        try {
            let result = await doAsnyc.increaseAsync(0);
            console.log(result);
            result = await doAsnyc.increaseAsync(result);
            console.log(result);
            result = await doAsnyc.increaseAsync(result);
            console.log(result);
            result = await doAsnyc.increaseAsync(result);
            console.log(result);
            result = await doAsnyc.increaseAsync(result);
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button onClick={onPrintMe}>printMe</button>
            <button onClick={onCallback}>callback</button>
            <button onClick={onPromise}>Promise</button>
            <button onClick={onAsyncAwait}>AsyncAwait</button>
        </div>
    );
}
export default AsnycTestEx;
