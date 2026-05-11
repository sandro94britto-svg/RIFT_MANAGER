import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
    const [saves, setSaves] = useState(() => {
        const saved = localStorage.getItem("saves");
        return saved ? JSON.parse(saved) : [];
    });

    const [activeSave, setActiveSave] = useState(null);

    useEffect(() => {
        localStorage.setItem("saves", JSON.stringify(saves));
    }, [saves]);

    const createSave = (newSave) => {
        const savewithId = {
            ...newSave,
            id: crypto.randomUUID(),
            createAT: Date.now(),
    };

    setSaves(prev => [...prev, savewithId]);
    setActiveSave(savewithId);
    return savewithId;
    };

    const loadSave = (id) => {
        const found = saves.find(s => s.id === id);
        setActiveSave(found || null);
    };

    return (
        <GameContext.Provider value={{ saves, activeSave, setSaves, createSave, loadSave }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
  return useContext(GameContext);
}