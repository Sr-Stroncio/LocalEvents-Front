import { createContext, useState, useContext } from 'react';


export const EsteticoContext = createContext();
export const useEstetico = () => useContext(EsteticoContext);


export function ProviderEstetico({ children }) {

    const [AsideOpen, setAsideOpen] = useState(false);


    return(
        <>
            <EsteticoContext.Provider value={{AsideOpen, setAsideOpen}}>
                {children}
            </EsteticoContext.Provider>
        </>
    )
}

export default ProviderEstetico;