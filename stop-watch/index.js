//
//
// const squares = (n) => {
//     let array = [];
//     for (let i=1; i<n+1; i++) {
//         let num = i*i;
//         array.push(num);
//     }
//     console.log(array);
// }
// squares(5);
//
//
// const range = (n, start, step) => {
//     let arr = [];
//     for (let i=0; i<n;i++) {
//         arr.push(start);
//         start+=step;
//     }
//     console.log(arr);
// }
// range(6,3,2);
//
//
// const random = (n, min, max) => {
//     let arr = [];
//     let count = 0;
//     while (count < n) {
//         let x = Math.floor(Math.random()*(max - min +1) + min);
//         arr.push(x);
//         count++;
//     }
//     console.log(arr);
// }
// random(4, 3, 11);
//
//
//
//
//
//
// const primes = (n) => {
//     let arr =[];
//     let count = 0;
//     let i = 2;
//     while (count < n) {
//         const isPrimes = (n) => {
//             if (n<2) {
//                 return false;
//             }
//             for (let j=2; j<=n-1; j++) {
//                 if (n % j === 0) {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         if (isPrimes(i)) {
//             count ++;
//             arr.push(i);
//         }
//         i++;
//     }
//     console.log(arr);
// }
// primes(25);
//
// function alphabetPosition(text) {
//     text.split("");
//     let arr = [];
//     let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     for (let i=0; i<text.length; i++) {
//        let char = text.charAt(i).toLowerCase();
//        if (alphabet.indexOf(char) > -1) {
//            arr.push(alphabet.indexOf(char) + 1);
//            var arr2 = arr.join(" ");
//        }
//     }
//     console.log(arr2);
// }
// alphabetPosition("asdbagscgasdhwaavsdvh");
//
//
// function betterThanAverage(classPoints, yourPoints) {
//     var total = 0;
//     for (let i=0; i<classPoints.length; i++) {
//         total+=classPoints[i];
//     }
//     var average = total/classPoints.length;
//    return average <= yourPoints;
// }
// betterThanAverage([2,3,5,22,34,4], 75);
//
//
// const add = (num1, num2) => {
//     let arr1 = num1.toString().split("").reverse().join("");
//     console.log(arr1);
//     let arr2 = num2.toString().split("").reverse().join("");
//     console.log(arr2);
//     let arr = [];
//     while (arr1.length !== arr2.length) {
//         if (arr1.length < arr2.length) {
//             arr1+="0";
//         }
//         else {
//             arr2+="0";
//         }
//     }
//     for (let i=0; i<arr1.length; i++) {
//         let x = parseInt(arr1[i]) + parseInt(arr2[i]);
//         arr.push(x);
//     }
//     console.log(parseInt(arr.reverse().join("")));
// }
// add(1,20101710);
//
// const evenChars = (text) => {
//     if (text.length < 2 || text.length > 100) {
//         return "invalid string";
//     }
//    let arr = [];
//     for (let i=1; i<=text.length; i++) {
//         if (i % 2 === 0) {
//             arr.push(text[i-1]);
//         }
//     }
//     console.log(arr);
// }
// evenChars("abcdefghijklm asd a @#@$234235dfasdf nsf sdgf gs gf%$5 4345  sefsf");



// function isIsogram(str){
//     if (str === "") {
//         return true;
//     }
//     str = str.toLowerCase();
//     for (let i=0; i<str.length; i++) {
//         for (let j=i+1; j<str.length; j++) {
//             if (str[i] === str[j]) {
//                 return false
//             }
//         }
//     }
//     return true;
// }
// isIsogram("adasdasdddfsg");


// function index(array, n){
//     let num = array[n];
//     console.log(num**n);
// }
// index([1,3,10,100], 3)




// function countDown () {
//     const start = document.getElementById("start");
//     const stop = document.getElementById("stop");
//     const reset = document.getElementById("reset");
//     const appendMinutes = document.getElementById("minutes");
//     const appendSeconds = document.getElementById("seconds");
//     let minutes = 0;
//     let seconds = 0;
//     let interval;
//
//     start.onclick = function () {
//         minutes = parseInt(appendMinutes.innerHTML);
//         seconds = parseInt(appendSeconds.innerHTML);
//         clearInterval(interval)
//         interval = setInterval(startCounting, 10);
//     }
//
//     stop.onclick = function () {
//         clearInterval(interval);
//     }
//
//     reset.onclick = function () {
//         appendSeconds.innerHTML = "00";
//         appendMinutes.innerHTML = "00";
//         clearInterval(interval);
//     }
//
//     function startCounting () {
//         seconds--;
//         if (seconds === -1) {
//             seconds = 59;
//             minutes--;
//         }
//         if (seconds >=10 ) {
//             appendSeconds.innerHTML = seconds;
//         }
//         else  {
//             appendSeconds.innerText = "0" + seconds;
//         }
//         if (minutes >= 10) {
//             appendMinutes.innerHTML = minutes;
//         }
//         else  {
//             appendMinutes.innerHTML = "0" + minutes
//         }
//         if (minutes === -1) {
//             alert("Time out");
//             appendSeconds.innerHTML = "00";
//             appendMinutes.innerHTML = "00";
//             clearInterval(interval);
//         }
//     }
// }
// countDown();





function wordValue(a) {
    let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let nums = [];
    for(let i = 0; i < a.length; i++) {
        let wordArray = a[i].split('');
        let sum = wordArray.reduce((add, letter) => {
            return (add + letters.indexOf(letter));
        }, 0)
        sum *= i + 1;
        nums.push(sum);
    }
    console.log(nums);
    return nums;
}
wordValue(["abc", "abc abc"]);







