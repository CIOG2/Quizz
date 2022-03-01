const localStorage = () => {
    const storage = window.localStorage;
    const set = (key, value) =>  storage.setItem(key, JSON.stringify(value));
    const get = (key) => JSON.parse(storage.getItem(key));
    const remove = (key) => storage.removeItem(key);
    const clear = () => storage.clear();
    return {
        set,
        get,
        remove,
        clear,
    };
}

//Funcion que registra un nuevo record
const NewScore = (name, score) => {

    //Data extrae los valores del localStorage
    const data = localStorage().get('QuizzGame');
    
    //Se crea un objeto con los datos que vienen como parametro
    const objeto = {
        name: name.toUpperCase(),
        score: score,
    };

    //Si ya tiene un record, se agrega el nuevo record
    if (data) {
        //se agrega el nuevo record al array
        data.push(objeto);
        //se ordena el array de mayor a menor
        const newData = data.sort((a, b) => b.score - a.score);
        //se guarda el nuevo array en el localStorage
        localStorage().set('QuizzGame', newData);
    } else {
        //si no tiene record, se crea un array con el nuevo record
        localStorage().set('QuizzGame', [objeto]);
    }
}

export { localStorage , NewScore };