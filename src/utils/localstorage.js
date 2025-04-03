export const setLocalStorage = value => {
    if(typeof window !== "undefined"){
        localStorage.setItem("objectId", value);
    }
}

export const getLocalStorage = () => {
    if (typeof window !== "undefined"){
        return localStorage.getItem("objectId");
    }
}