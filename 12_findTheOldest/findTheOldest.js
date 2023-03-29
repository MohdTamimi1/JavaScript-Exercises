const findTheOldest = (list) => {
    let oldest = [];
    let temp = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].yearOfDeath) {
            temp = list[i].yearOfDeath - list[i].yearOfBirth;
        }
        oldest.push(temp);
    }
    return list[oldest.indexOf(Math.max(...oldest))];
};

// const list = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ];

// console.log(findTheOldest(list));

// Do not edit below this line
module.exports = findTheOldest;
