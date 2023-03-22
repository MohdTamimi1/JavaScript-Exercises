const removeFromArray = function (arr, ...args) {
    const temp = [];
    arr.forEach(element => {
        if (!args.includes(element)) {
            temp.push(element);
        }
    });
    return temp;
}
// console.log(removeFromArray([1, 2, 3], 1));


// Do not edit below this line
module.exports = removeFromArray;
