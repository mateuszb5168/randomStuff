//whats up older me(or a pedestrian checking around), do you wanna feel better/and or laugh? here you go.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = [];
    let map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    s = s.split("");
    for (let index = 0; index < s.length; index++) {
        let char = s[index];
        number.push(map.get(char));
    }
    // compare first and next, if first smaller, subtract
    for (let index = 0; index < number.length - 1; index++) {
        index1 = index + 1;
        let a = number[index]
        let b = number[index1]
        if (a > b) {
            let result = number.reduce((c, d) => c + d, 0)
        }
        else if (a === b) {
            let result = number.reduce((c, d) => c + d, 0)
        }
        else{
            let result = number.reduce((c, d) => c - d, 0)
        }
        //brain think a, b vars interfere a, b reduce input
        //brain cant loop number, brain tired, brain stupid, brain can do dumb hardcode.
        //brain dont know js, brain dont know to check how output positive(//brain cant loop number, brain tired, brain stupid, brain can do dumb hardcode.)
    }
    return(result);
};

//not finished yet, my brain nonexistent
