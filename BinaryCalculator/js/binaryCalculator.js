/**
 * Created by PANDAV on 14-06-2018.
 */
let res = document.getElementById("res");

function checkOp(){
    if(res.innerHTML.endsWith("+") || res.innerHTML.endsWith("-") || res.innerHTML.endsWith("*") || res.innerHTML.endsWith("/")){
        return true;
    }
}
function click0(){
    res.innerHTML += 0;
}
function click1(){
    res.innerHTML += 1;
}
function clickSum(){
    if(res.innerHTML.length!==0 && !checkOp()){
        res.innerHTML += '+';
    }
}
function clickSub(){
    if(res.innerHTML.length!==0 && !checkOp()){
        res.innerHTML += '-';
    }
}
function clickMul(){
    if(res.innerHTML.length!==0 && !checkOp()){
        res.innerHTML += '*';
    }
}
function clickDiv(){
    if(res.innerHTML.length!==0 && !checkOp()){
        res.innerHTML += '/';
    }
}
function clickClr(){
    res.innerHTML = '';
}
function clickEql(){
    let str = res.innerHTML;
    let result = 0;
    if(str.length !==0){
        if(str.indexOf("+") !== -1){
            let nums = str.split("+");
            let x = parseInt(nums[0], 2);
            let y = parseInt(nums[1], 2);
            let sum = x+y;
            result = sum.toString(2);
        }
        else if(str.indexOf("-") !== -1){
            let nums = str.split("-");
            let x = parseInt(nums[0], 2);
            let y = parseInt(nums[1], 2);
            let sub = x-y;
            result = sub.toString(2);
        }
        else if(str.indexOf("*") !== -1){
            let nums = str.split("*");
            let x = parseInt(nums[0], 2);
            let y = parseInt(nums[1], 2);
            let mul = x*y;
            result = mul.toString(2);
        }
        else if(str.indexOf("/") !== -1){
            let nums = str.split("/");
            let x = parseInt(nums[0], 2);
            let y = parseInt(nums[1], 2);
            let div = Math.floor(x/y);
            result = div.toString(2);
        }

        res.innerHTML = result;
    }
}