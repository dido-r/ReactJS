import { createContext, useState, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const SessionContext = createContext();

export const SessionProvider = ({
    children,
}) => {
    const [basket, setBasket] = useState([])
    const [user, setUser] = useLocalStorage('userPS');

    const contextValues = {
        basket,
        setBasket,
        user,
        setUser
    };

    return (
        <>
            <SessionContext.Provider value={contextValues}>
                {children}
            </SessionContext.Provider>
        </>
    );
};

export const useSessionContext = () => {

    const context = useContext(SessionContext);

    return context;
};