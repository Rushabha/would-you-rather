export const logger = (store) => (next) => (action) => {
    console.group(action.type);
        const result = next(action);
        console.log('New state: ', store.getState());
    console.groupEnd();
    return result;
}