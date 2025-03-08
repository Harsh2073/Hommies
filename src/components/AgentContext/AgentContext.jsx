import {createContext,useState,useEffect } from 'react';

import  { agentsData } from '../../data';

export const AgentContext = createContext();

const AgentContextProvider = ({ children }) => {
    const [agents, setAgents] = useState([]);

    useEffect(()=>{
        setAgents(agentsData || []);
    },[]);
    return (
        <AgentContext.Provider value={{agents}}>
            {children}
        </AgentContext.Provider>
    );
};
export default AgentContextProvider;