import { useState } from "react";

export function useLocalStorage(key){

    const [user, setState] = useState(
        JSON.parse(localStorage.getItem(key))
    );

    const setUser = (initValues) => {

        setState(initValues);
        initValues !== null ? localStorage.setItem(key, JSON.stringify(initValues)) : localStorage.removeItem(key);
    }

    return [user, setUser]
}