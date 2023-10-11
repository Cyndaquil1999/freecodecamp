function checkPositive(arr) {
    // この行の下にあるコードのみを変更
    return arr.every(function(val) {
        return val > 0;
    })
    
    // この行の上にあるコードのみを変更
}

checkPositive([1, 2, 3, -4, 5]);