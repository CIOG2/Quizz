const localStorage = () => {
    const storage = window.localStorage;
    const set = (key, value) => storage.setItem(key.toUpperCase(), JSON.stringify(value));
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

export { localStorage };