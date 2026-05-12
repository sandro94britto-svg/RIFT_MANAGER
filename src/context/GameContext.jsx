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

    const deleteSave = (id) => {
        setSaves(prev => 
            prev.filter(save => save.id !== id)
        );
        if (activeSave?.id === id) {
            setActiveSave(null);
        }
    };

    return (
        <GameContext.Provider value={{ saves, setSaves, activeSave, setActiveSave, createSave, loadSave, deleteSave }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
  return useContext(GameContext);
}