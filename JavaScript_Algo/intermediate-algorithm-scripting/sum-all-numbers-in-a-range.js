function sumAll(arr) {
    let answer = 0;
    let left, right;
    if (arr[0] > arr[1]) {
        left = arr[1];
        right = arr[0];
    } else {
        left = arr[0];
        right = arr[1];
    }
    for (let i = left; i <= right; i++) {
        //console.log(i);
        answer += i;
    }
    return answer
}


  
console.log(sumAll([4,1]));
