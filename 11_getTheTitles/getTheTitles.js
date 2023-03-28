const getTheTitles = (list) => {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        newList.push(list[i].title);
    }
    return newList;
};

// Do not edit below this line
module.exports = getTheTitles;
