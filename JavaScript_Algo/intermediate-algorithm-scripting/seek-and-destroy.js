function destroyer(arr) {
    const targets = Array.from(arguments).slice(1);
    arr = arr.filter(item => !targets.includes(item));

    return arr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);