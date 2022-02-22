const ramdonNumbers = (list) => {

    let elements = list.length;
    let newList = [];

    for (let i = 0; i < elements; i++) {
        const ramdon = Math.floor(Math.random() * list.length);
        newList.push(list[ramdon]);
        list.splice(ramdon, 1);
    }
    
    return newList;
}

export { ramdonNumbers };