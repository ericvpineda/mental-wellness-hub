export default function localStorage(key) {
    const setItem = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("ERROR IN LOCAL STORAGE HOOK: ", error)
        }
    }

    const getItem = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.log("ERROR IN LOCAL STORAGE HOOK: ", error)
        }
    }

    return { setItem, getItem }
}