function add(x) {
    // この行の下にあるコードのみを変更
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
  
    // この行の上にあるコードのみを変更
}
  
add(10)(20)(30);