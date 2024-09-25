import React, { createContext, useState, useContext } from 'react';

const CurrentDetailsContext = createContext();

export const CurrentDetailsProvider = ({ children }) => {
    const [currentStage, setCurrentStage] = useState(1);
    const [cameraPosition, setCameraPosition] = useState([0, 0, 200]);
    const [isFirstTime, setFirstTime] = useState(true);

    return (
        <CurrentDetailsContext.Provider value={{ currentStage, setCurrentStage, cameraPosition, setCameraPosition, setFirstTime, isFirstTime }}>
            {children}
        </CurrentDetailsContext.Provider>
    );
};

export const useCurrentDetails = () => {
    return useContext(CurrentDetailsContext);
};