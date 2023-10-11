function whatIsInAName(collection, source) {
    let targetkey = Object.keys(source)[0];
    let targetval = source[targetkey];
    let answer = [];

    for (let i = 0; i < collection.length; i++) {
        let obj = collection[i];
        for (let key in obj){
            if (key === targetkey && obj[key] === targetval) {
                answer.push(obj);
            }
        }   
    }
    return answer;
}

let test = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

let test1 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

console.log(test);
console.log(test1);